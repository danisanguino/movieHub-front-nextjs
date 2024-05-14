import Link from "next/link";
import "./login.css"
import Button from "@/components/button/button";

export default function Home() {

  return (
    <main className="container">
      <div className="login">
        <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1715183824/movie-hub-logo_vx2bju.png" className="logo" />
        <h2>Welcome</h2>
        <p>This a movie hub, to see our movies you must to ge loged</p>
      
          <Button
            title={` Start! `}
            link= {"/movies"}
            />
      </div>
    </main>
  );
}
