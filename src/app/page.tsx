import Link from "next/link";
import "./login.css"

export default function Home() {

  return (
    <main className="container">
      <div className="login">
        <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1715183824/movie-hub-logo_vx2bju.png" className="logo" />
        <h2>Welcome</h2>
        <p>This a movie hub, to see our movies you must to ge loged</p>
        <form className="form-login">
          <input type="text" className="input-form-login" placeholder="Your name here"/>
          <input type="email" className="input-form-login" placeholder="Your email here"/>
          <button><Link href="/movies"> Let's Start </Link></button>
        </form>
      </div>
    </main>
  );
}
