package com.example.spotifytool.AuthorizationFlowPKCE;

public class SpotifyDetails {
    public static final String clientId = "39361baa253b4db7942d9aeb87f409ce"; 
    public static final String clientSecret = "e524686bff6e4059a888a05a4b5c5b1c";
    public static final String redirectUri = "http://localhost:8080/api/callback";
    public static final String codeChallengeMethod = "S256";
    public static final String scope =
            "ugc-image-upload," +
            "user-read-playback-state," +
            "user-modify-playback-state," +
            "user-read-currently-playing," +
            "streaming,app-remote-control," +
            "playlist-read-collaborative," +
            "playlist-modify-public," +
            "playlist-read-private," +
            "playlist-modify-private," +
            "user-library-modify," +
            "user-library-read," +
            "user-top-read," +
            "user-read-playback-position," +
            "user-read-recently-played," +
            "user-follow-read," +
            "user-follow-modify";
}