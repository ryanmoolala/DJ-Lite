package com.example.spotifytool.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class MusicPlayingService {
    private static String url = "https://api.spotify.com/v1/me/player/currently-playing";
    public static String foo(String token) {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(url))
        .header("Authorization", "Bearer " + token)
        .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return response.body();

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        } finally {
            client.close();
        }
        return null;
    }
}
