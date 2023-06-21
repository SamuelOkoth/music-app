import { loginEndpoint } from "../../spotify"
import "./login.css"
export default function Login() {
  return (
    <div className="login-page">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
       alt="spotify logo" className="logo"/>
        <a href={loginEndpoint}>
            <div className="logo-btn">LOGIN</div>
        </a>

    </div>
  )
}
