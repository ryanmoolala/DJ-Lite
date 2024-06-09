package com.example.spotifytool.Service;


import org.json.simple.JSONObject;

import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class TopGenresService {
    private Map<String, Integer> hashmap;
    private Queue<Map.Entry<String, Integer>> maxHeap;

    public TopGenresService() {
        this.hashmap = new HashMap<>();
        this.maxHeap = new PriorityQueue<>(new Comparator<Map.Entry<String, Integer>>() {
            @Override
            public int compare(Entry<String, Integer> o1, Entry<String, Integer> o2) {
                return  o2.getValue() - o1.getValue();
            }
        });
    }

    public static String foo(String topArtist) {

        TopGenresService instance = new TopGenresService();
        
        if (topArtist == null) {
            System.out.println("Invalid input: One or more parameters are null");
            return "";
        }

        JSONParser parser = new JSONParser(); 

        try {
            JSONObject artistJSON = (JSONObject) parser.parse(topArtist);

            JSONArray artistArray = (JSONArray) artistJSON.get("items");

            for (int i = 0; i < artistArray.size(); i++) {

                JSONObject artist = (JSONObject) artistArray.get(i);
                JSONArray genreArray = (JSONArray) artist.get("genres");

                for (int j = 0; j < genreArray.size(); j++) {
                    addToHashMap((String) genreArray.get(j), instance.hashmap);
                }
            }

            addToPQ(instance.hashmap, instance.maxHeap);
            return getTop20Items(instance.maxHeap);
            
        } catch (ParseException e) {
            e.printStackTrace();
        }  

        return "";
    }

    private static void addToHashMap(String genre, Map<String, Integer> hashmap) {
        hashmap.put(genre, hashmap.getOrDefault(genre, 0) + 1);
    }

    private static void addToPQ(Map<String, Integer> currentHashmap, Queue<Map.Entry<String, Integer>> maxHeap) {
        for (Map.Entry<String, Integer> entry : currentHashmap.entrySet()) {
            maxHeap.offer(entry);
        }
    }

    @SuppressWarnings("unchecked")
    public static String getTop20Items(Queue<Map.Entry<String, Integer>> maxHeap) {
        JSONArray jsonArray = new JSONArray();
        int count = 0;
        Set<String> uniqueGenres = new HashSet<>();

        while (!maxHeap.isEmpty() && count < 20) {
            Map.Entry<String, Integer> entry = maxHeap.poll();
            String genre = entry.getKey();
            if (!uniqueGenres.contains(genre)) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("genre", genre);
                jsonObject.put("count", entry.getValue());
                jsonArray.add(jsonObject);
                uniqueGenres.add(genre);
                count++;
            }
        }
        return jsonArray.toJSONString();
    }
}
