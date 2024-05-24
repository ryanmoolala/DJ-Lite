import React, { useEffect, useState } from "react";

const HomePage = () => {

    const [userTopArtist, setUserTopArtist] = useState();
    
    useEffect(() => {
        fetch("http://localhost:8080/api/user-top-artist")
        .then(response => response.json)
        .then(data => {
            console.log(data)
            setUserTopArtist(data)
        })
    })

    return (
        <div>
            <h1>Spotify Home Page</h1>
            {userTopArtist ? <p>{userTopArtist}</p> : <h1>Loading...</h1>}
        </div>
    )
}


export default HomePage;