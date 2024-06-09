package com.example.spotifytool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class SpotifytoolApplication {
    public static void main(String[] args) {
		SpringApplication.run(SpotifytoolApplication.class, args);
	}
	@GetMapping("/")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
