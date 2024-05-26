DJ Lite

Background: 
Summer break. I decided to build a web app that focuses on Spotify, that performs data analysis by making use of it's Developer API. Most of already exisitng projects out there use either Python or Javascript to serve the backend hence I thought it will be challenging to use Java instead. This project has served me well as it introduced new concepts related to full stack development which I aim to do in the future.

Some noteworthy things I have learnt are OAuth 2.0, Spring framework, session management and many more...
 
Tech Stack:
Frontend / Client
- HTML
- CSS
- JavaScript
- ReactJS

Backend / Server
- Java 21
- Spring boot 3.2.5
- Spring MVC

Others:
- Docker
  
Resources:
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [Authorization PKCE](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow)
  

Building and running the project:

To get started, follow these steps:

1. Open the terminal in the project root directory
2. Build Docker images 
```docker-compose build```
3. Run docker container using ```docker-compose up```
4. Now the React application runs on [http://localhost:3000](http://localhost:3000) and the Spring Boot application runs on [http://localhost:8080](http://localhost:8080) 


