const authEndpoint = "http://accounts.spotify.com/authorize?"
const clientId = "914d7fb580ea48c19610e967a3a99ec4"
const redirectUri = "https://localhost:3000"
const scopes = ["user-library-read", "playlist-read-private"];


export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
  