import "./login.css"
import Button from "@/components/button/button";
import Image from "next/image";


export default function Home() {

  return (
    <main className="container">
      <div className="login">
        <Image src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1715183824/movie-hub-logo_vx2bju.png"
        alt="moviehub logo"
        width={300}
        height={127}
        />
        <h2>Welcome</h2>
        <p>This a movie hub, to see and upload movies you must to ge loged</p>
      
          <Button
            title={` Start! `}
            link= {"/api/auth/login"}
            />
      </div>
    </main>
  );
}