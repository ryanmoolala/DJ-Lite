package com.example.spotifytool.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class FindTrackService {
    private static String src = "https://api.spotify.com/v1/tracks/";

    public static String foo(String token, String trackID) {
        String url = String.format("%s%s", src, trackID);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(url))
        .header("Authorization", "Bearer " + token)
        .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            Gson gson = new Gson();
            JsonObject trackjson = gson.fromJson(response.body(), JsonObject.class);
            return trackjson.get("album").getAsJsonObject().get("external_urls").getAsJsonObject().get("spotify").getAsString();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } 
        return null;
    }
}
