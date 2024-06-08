package com.example.spotifytool.Controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.spotifytool.Service.DeviceIDService;
import com.example.spotifytool.Service.MusicPlayingService;
import com.example.spotifytool.Service.PauseService;
import com.example.spotifytool.Service.ResumeService;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PathVariable;




@Controller
@RequestMapping("/player")
public class PlayerController {

    @GetMapping("/device")
    public ResponseEntity<String> getDeviceID(HttpSession session) {
        String data = DeviceIDService.foo((String) session.getAttribute("access"));
        return ResponseEntity.ok(data);
    }
    

    @GetMapping("/findSpotifyPlaying") //finds current playing song
    public ResponseEntity<String> getSpotifyPlaying(HttpSession session) {
        String data = MusicPlayingService.foo((String) session.getAttribute("access"));
        return data.isEmpty() ? ResponseEntity.ok("") : ResponseEntity.ok(data);
    }
    

    @PutMapping("/pause/{id}")
    public ResponseEntity<String> PauseSong(@PathVariable String id, HttpSession session) {
        PauseService.foo((String) session.getAttribute("access"));
        return ResponseEntity.ok("None");
    }   

    @PutMapping("/resume/{id}")
    public ResponseEntity<String> ResumeSong(@PathVariable String id, HttpSession session) {
        ResumeService.foo((String) session.getAttribute("access"));
        return ResponseEntity.ok("None");
    }   

    @PutMapping("/play")
    public ResponseEntity<String> PlaySong(@RequestBody Map<String,String> body, HttpSession session) {
        ResumeService.play((String) session.getAttribute("access"), body.get("offset"), body.get("albumID"));
        return ResponseEntity.ok("None");
    }   
}
