package com.example.spotifytool.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class TopArtistsService {
    private static String src = "https://api.spotify.com/v1/me/top/artists";

    public static void foo(String token) {
        String url = String.format("%s?time_range=%s&limit=%d&offset=%d", src, "medium_term", 10, 5);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(url))
        .header("Authorization", "Bearer " + token)
        .build();

    try {
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());

    } catch (IOException | InterruptedException e) {
        e.printStackTrace();
    }
 }
}
