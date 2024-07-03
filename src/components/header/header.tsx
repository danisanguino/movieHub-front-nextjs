import "./header.css"
import Link from 'next/link';
import { getSession } from "@auth0/nextjs-auth0";
import { FaUpload } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri"
import Image from "next/image";




export default async function Header() {
    const session = await getSession();
    console.log(session?.user.picture)

    return (
        <>
            <main className="header-container">
                <Link href="/movies">
                    <Image src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1715183824/movie-hub-logo_vx2bju.png"
                        height={60}
                        width={142}
                        alt="logo"
                        />
                </Link>
                <div className="user">
                    <Link href="/form"><FaUpload className="upload-buton" size={25} /></Link>
                    <h3>Hola {session?.user.name}!</h3>
                    <Link href="/api/auth/logout"><RiLogoutBoxLine className="upload-buton" size={35} /></Link>
                    <img src={session?.user.picture} className="img-profile" alt={session?.user.name}/>
                </div>
            </main>
        </>
    )
}