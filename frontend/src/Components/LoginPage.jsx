import React from "react";


const LoginPage = () => { 

    const getUserLogin = () => {
        fetch("http://localhost:8080/api/login")
        .then(response => 
            response.text()
        )
        .then(response => {
            window.location.replace(response);
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div style = {{display: "flex", justifyContent: "center"}}>
                <h1>Welcome to SpotifyTool!</h1>
            </div>

            <div style = {{display: "flex", justifyContent: "center"}}>
                <h1>
                    Please login with SpotifyTool to get started!
                </h1>
            </div>

            <div style={{display: "flex", justifyContent: "center", margin: "1rem"}}>
                <button onClick={getUserLogin}>Sign in</button>
            </div>
        </div>
    )
}

export default LoginPage;