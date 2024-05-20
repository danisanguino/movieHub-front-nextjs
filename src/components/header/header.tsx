import "./header.css"
import Link from 'next/link';
import { getSession } from "@auth0/nextjs-auth0";


export default async function Header() {
    const session = await getSession();
    console.log(session?.user.picture)

    return (
        <main className="header-container">
            <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1715183824/movie-hub-logo_vx2bju.png" height={"60px"} className="logo" />
            <div className="user">
                <button><Link href="api/auth/logout">Logout</Link></button>
                <h3>Hello dear {session?.user.name}</h3>
                <img src={session?.user.picture} className="img-profile" alt={session?.user.name}/>
            </div>
        </main>
    )
}