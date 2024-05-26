import React, { useEffect, useState } from "react";

const HomePage = () => {


    const handleApiRequest = () => {
        try {
            const response =  fetch("/api/user-top-artist", {
                method: "GET", // or "POST" if needed
                // Add any necessary headers here (e.g., authorization token)
            });
    
            if (response.ok) {
                // Handle the successful response (e.g., update state, display data)
                const data = response.json();
                console.log("API response:", data);
            } else {
                console.error("API request failed:", response.status, response.statusText);
            }


        } catch (error) {
            console.error("Error sending API request:", error);
        }
    };

    
    return (
        <div>
            <h1>Spotify Home Page</h1>
            <button onClick={handleApiRequest}>Send API Request</button>
        </div>
    )
}


export default HomePage;