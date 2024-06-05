package com.example.spotifytool.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class TopArtistsService {
    private static String src = "https://api.spotify.com/v1/me/top/artists";

    public static String foo(String token, String term, int limit) {
        String url = String.format("%s?time_range=%s&limit=%d&offset=%d", src, term, limit, 0);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(url))
        .header("Authorization", "Bearer " + token)
        .header("Accept-Charset", "UTF-8")
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
