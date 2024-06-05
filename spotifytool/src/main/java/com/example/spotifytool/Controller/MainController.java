package com.example.spotifytool.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.spotifytool.Service.FindAlbumService;
import com.example.spotifytool.Service.FindArtistService;
import com.example.spotifytool.Service.FindTrackService;
import com.example.spotifytool.Service.MusicPlayingService;
import com.example.spotifytool.Service.TopArtistsService;
import com.example.spotifytool.Service.TopGenresService;
import com.example.spotifytool.Service.TopSongsService;
import com.example.spotifytool.Service.UserStatsService;

import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/api")
public class MainController {

    private String[] timeRange = new String[]{"short_term", "medium_term", "long_term"};

    @GetMapping("/user-top-artist")   //gets top artists
    public ResponseEntity<String> getTopArtist(@RequestParam("term") int term, HttpSession session) {
        String data = TopArtistsService.foo((String) session.getAttribute("access"), timeRange[term], 50);
        return ResponseEntity.ok(data);
    }

    @GetMapping("/user-top-song")    //gets top tracks
    public ResponseEntity<String> getTopSong(@RequestParam("term") int term, HttpSession session) {
        String data = TopSongsService.foo((String)session.getAttribute("access"), timeRange[term], 50);
        return ResponseEntity.ok(data);
    }

    @GetMapping("/user-top-genre")
    public ResponseEntity<String> getTopGenre() {
        TopGenresService.foo("", "");
        return ResponseEntity.ok("null");
    }

    @GetMapping("/user-profile")   //gets user profile
    public ResponseEntity<String> getUserStats(HttpSession session) {
        String data = UserStatsService.foo((String) session.getAttribute("access"));
        return ResponseEntity.ok(data);
    }

    @GetMapping("/findArtist")   //finds artist
    public ResponseEntity<String> getArtist(@RequestParam("id") String id, HttpSession session) {
        String redirectURL = FindArtistService.foo((String) session.getAttribute("access"), "0TnOYISbd1XYRBk9myaseg");
        return ResponseEntity.ok(redirectURL);
    }

    @GetMapping("/findTrack") //finds a track
    public ResponseEntity<String> getTrack(HttpSession session) {
        String redirectURL = FindTrackService.foo((String) session.getAttribute("access"), "11dFghVXANMlKmJXsNCbNl");
        return ResponseEntity.ok(redirectURL);
    }
 
    @GetMapping("/findAlbum")  //finds an album
    public ResponseEntity<String> getAlbum(HttpSession session) {
        String redirectURL = FindAlbumService.foo((String) session.getAttribute("access"), "4aawyAB9vmqN3uQ7FjRGTy");
        return ResponseEntity.ok(redirectURL);
    }
    
}
