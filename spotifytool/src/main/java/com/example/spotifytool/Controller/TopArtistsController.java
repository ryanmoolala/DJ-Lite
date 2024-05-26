package com.example.spotifytool.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/api")
public class TopArtistsController {
    @GetMapping("/user-top-artist")
    public int[] getTopArtist(HttpSession session) {
        System.out.println("TOP ARTISTS CONTROLLER");
        System.out.println("Session: " + session.getAttribute("access"));
        return null;
    }

    @GetMapping("/user-top-song")
    public String getTopSong() {
        return new String();
    }

    @GetMapping("/user-top-genre")
    public String getTopGenre() {
        return new String();
    }
    
    


   /*public Artist[] getData() {

        System.out.println("top artists...");
        
        final GetUsersTopArtistsRequest getUsersTopArtistsRequest = spotifyApi.getUsersTopArtists()
        .time_range("medium_term")
        .limit(10)
        .offset(5)
        .build();

        try {
            final Paging<Artist> artistPaging = getUsersTopArtistsRequest.execute();
            return artistPaging.getItems();
        }

        catch (Exception e) {
            System.out.println("something went wrong!\n" + e.getMessage());
        }
        return new Artist[0];
    }*/
    
}
