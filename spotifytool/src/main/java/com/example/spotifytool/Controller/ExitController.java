package com.example.spotifytool.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/api")
public class ExitController {
    @GetMapping("/exit")
    public ResponseEntity<String> exitApp() {
        return ResponseEntity.ok("http://localhost:3000/");
    }
}
