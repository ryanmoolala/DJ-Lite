import React from "react";

const HomePage = () => {


    const userTopArtist = () => fetch("/api/user-top-artist", {method: "GET",})
            .then(response => {
                console.log(response.text()
            .then(data => console.log(data)));
            });
    ;

    
    return (
        <div>
            <h1>Spotify Home Page</h1>
            <button onClick={userTopArtist}>Send API Request for user-top-artist</button>
        </div>
    )
}


export default HomePage;