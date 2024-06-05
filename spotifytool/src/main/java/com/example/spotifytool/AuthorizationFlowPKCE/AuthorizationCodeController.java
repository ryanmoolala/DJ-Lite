package com.example.spotifytool.AuthorizationFlowPKCE;

import java.io.IOException;
import java.net.URI;
import java.util.UUID;

import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;
import se.michaelthelin.spotify.requests.authorization.authorization_code.pkce.AuthorizationCodePKCERequest;

import org.apache.hc.core5.http.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class AuthorizationCodeController {   

    private static URI redirectUri = SpotifyHttpManager.makeUri(SpotifyDetails.redirectUri);

    private static final String securityState = UUID.randomUUID().toString();
    private static final String codeVerifier = "NlJx4kD4opk4HY7zBM6WfUHxX7HoF8A2TUhOIPGA74w";
    private static final String codeChallenge = CodeChallenge.getCodeChallenge(codeVerifier);

    private static SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientId(SpotifyDetails.clientId)
            .setClientSecret(SpotifyDetails.clientSecret)
            .setRedirectUri(redirectUri)
            .build();


    /*RETURNS THE LOGIN PAGE URL */
    @GetMapping("/login")  
    public static String getUri() throws ParseException {
        AuthorizationCodeUriRequest authCodeUriReq = spotifyApi
        .authorizationCodePKCEUri(codeChallenge)
        .state(securityState)
        .scope(SpotifyDetails.scope)
        .show_dialog(true)
        .build();
        return authCodeUriReq.execute().toString();
    }


    public static AuthorizationCodePKCERequest getUri2(String code, String verifier) {
        return spotifyApi.authorizationCodePKCE(code, verifier).build();
    }

    /*RETURNS THE STRING AUTHENTHICATION CODE */
    @GetMapping("/callback")
    public String getAuthCode(@RequestParam("code") String authCode, HttpServletResponse response, HttpSession session) throws IOException {
        String code = authCode;
        AuthorizationCodePKCERequest authorizationCodePKCERequest = spotifyApi.authorizationCodePKCE(code, codeVerifier).build();
        
        try {
            final AuthorizationCodeCredentials credentials = authorizationCodePKCERequest.execute();

            spotifyApi.setAccessToken(credentials.getAccessToken());
            spotifyApi.setRefreshToken(credentials.getRefreshToken());

            session.setAttribute("type", credentials.getTokenType());
            session.setAttribute("access", credentials.getAccessToken());
            session.setAttribute("refresh", credentials.getRefreshToken());
            session.setMaxInactiveInterval(credentials.getExpiresIn());


        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        response.sendRedirect("http://localhost:3000/api/dashboard");
        return spotifyApi.getAccessToken();
    }
}
