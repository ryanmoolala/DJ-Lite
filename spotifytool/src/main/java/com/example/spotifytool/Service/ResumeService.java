package com.example.spotifytool.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ResumeService {
    private static String src = "https://api.spotify.com/v1/me/player/play";

    public static String foo(String token) {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(src))
        .header("Authorization", "Bearer " + token)
        .PUT(HttpRequest.BodyPublishers.noBody())
        .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return response.body();

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        } finally {
            client.close();
        }
        return "";
    }


    public static String play(String token, String offset, String albumID) {
        System.out.println("playing: " + offset);
        System.out.println("album: " + albumID);


        HttpClient client = HttpClient.newHttpClient();
        TrackRequestBody requestBody = new TrackRequestBody(offset, albumID);

        HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(src))
        .header("Authorization", "Bearer " + token)
        .header("Content-Type", "application/json")
        .PUT(HttpRequest.BodyPublishers.ofString(requestBodyToJson(requestBody)))
        .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response);
            System.out.println(response.body());
            return response.body();

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        } finally {
            client.close();
        }
        return "";
    }

    private static String requestBodyToJson(TrackRequestBody requestBody) {
        return "{\"context_uri\":\"spotify:album:" + requestBody.albumID + "\","
                + "\"offset\":{\"position\":" + requestBody.offset + "},"
                + "\"position_ms\":0}";
    }


    public static class TrackRequestBody {
        public String offset;
        public String albumID;
        public TrackRequestBody(String offset, String albumID) {
            this.offset = offset;
            this.albumID = albumID;
        }
    }
}
