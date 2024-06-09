
Background: 
Summer break. I decided to build a web app that focuses on Spotify, that performs data analysis by making use of it's Developer API. Most of already exisitng projects out there use either Python or Javascript to serve the backend hence I thought it will be challenging to use Java instead. This project has served me well as it introduced new concepts related to full stack development which I aim to do in the future. 

Some noteworthy things I have learnt are 
- OAuth 2.0
- Java Spring Boot & Spring MVC
- Session management
- XSS, CRSF attacks
- RESTful API calls, interacting with Spotify Web API & understanding its limitations
- WebSockets & Long polling
   
```Progression``` provides greater insight 
 
Tech Stack used:
Frontend / Client
- HTML
- Tailwind CSS
- JavaScript
- ReactJS

Backend / Server
- Java 21
- Spring boot 3.2.5
- Spring MVC

Others:
- Docker / Docker Desktop
  
Resources:
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [Authorization PKCE](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow)
  
If you would like to try this application out Follow these steps.

0. Ensure Java 21, Maven & React are all already installed before proceeding.

1. Clone the repository
   ``` git clone https://github.com/ryanmoolala/DJ-Lite.git ``` or
   ```bash
    git clone git@github.com:ryanmoolala/DJ-Lite.git
   ```
3. Create A New App In [Spotify Developers Console](https://developer.spotify.com/dashboard) & Create app
4. Set Redirect URL to [http://localhost:8080/callback](http://localhost:8080/api/callback)
5. Copy the client-id generated for the above app along with redirect-uri and configure them in ```spotifytool/src/main/java/com/example/spotifytool/AuthorizationFlowPKCE/SpotifyDetails.java```
6. Copy the Redirect URL above and paste it in the same file in Step 4.
7. Open up your terminal and follow these commands:
   ```bash
   cd spotifyclient
   ```
   ```bash
   mvn clean install
   ```
   ```bash
   mvn spring-boot:run
   ```

8. Open another terminal window and follow these commands:
   ```bash
   cd frontend
   ```
   ```bash
   npm install react-scripts
   ```
   ```bash
   npm start
   ```

10. Remember that both terminals must be up and running (frontend & backend)
11. Frontend runs on ```localhost:3000``` and Backend runs on ```localhost:8080```


https://github.com/ryanmoolala/DJ-Lite/assets/121856093/0fc0cb4f-2582-4916-a6cf-a8249ecb0efc
