package com.example.spotifytool.Controller;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.spotifytool.Service.TopArtistsService;
import com.example.spotifytool.Service.TopGenresService;
import com.example.spotifytool.Service.TopSongsService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/api")
public class TopItemsController {
    private String[] timeRange = new String[]{"short_term", "medium_term", "long_term"};
    private String artistData;
    private String trackData;
    private String genreData;


    @GetMapping("/user-top-artist")   //gets top artists
    public ResponseEntity<String> getTopArtist(@RequestParam("term") int term, HttpSession session) {
        this.artistData = TopArtistsService.foo((String) session.getAttribute("access"), timeRange[term], 50);
        return ResponseEntity.ok(this.artistData);
    }

    @GetMapping("/user-top-song")    //gets top tracks
    public ResponseEntity<String> getTopSong(@RequestParam("term") int term, HttpSession session) {
        this.trackData = TopSongsService.foo((String)session.getAttribute("access"), timeRange[term], 50);
        return ResponseEntity.ok(this.trackData);
    }

    @GetMapping("/user-top-genre")
    public ResponseEntity<String> getTopGenre(@RequestParam("term") int term, HttpSession session) {
        ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

        CompletableFuture<String> futureResult = CompletableFuture.supplyAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.getMessage();
            }
            return TopGenresService.foo(TopArtistsService.foo((String)session.getAttribute("access"), timeRange[term], 50));
        }, executor);

        try {
            String result = futureResult.join();
            executor.shutdown();
            return ResponseEntity.ok(result);

        } catch (Exception e) {
            executor.shutdown();
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error fetching data");
        }
    }
}
