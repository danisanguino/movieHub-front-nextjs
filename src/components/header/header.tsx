import "./header.css"
import Link from 'next/link';
import { getSession } from "@auth0/nextjs-auth0";
import { FaUpload } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri"




export default async function Header() {
    const session = await getSession();
    console.log(session?.user.picture)

    return (
        <>
            <main className="header-container">
                <Link href="/movies"><img src="./movie-hub-logo_vx2bju.png" alt="logo" className="logo"/></Link>
                <div className="user">
                    <Link href="/form"><FaUpload className="upload-buton" size={25} /></Link>
                    <h3>Hola {session?.user.name}!</h3>
                    <Link href="api/auth/logout"><RiLogoutBoxLine className="upload-buton" size={35} /></Link>
                    <img src={session?.user.picture} className="img-profile" alt={session?.user.name}/>
                </div>
            </main>
        </>
    )
}