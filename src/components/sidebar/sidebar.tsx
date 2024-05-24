"use client"

import Image from "next/image";
import "./sidebar.css"
import Link from "next/link";
import { FaUpload } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {

    const [isCollapseSidebar, setIsCollapseSidebar] = useState<boolean>(false)

    const isCollapseHandler = ()=> {
        setIsCollapseSidebar((prev) => !prev);
    }

    return (
        <div className="sidebar-wrapper">
            <button onClick={isCollapseHandler}>open close</button>
            <div className="sidebar" data-collapse={isCollapseSidebar}>
                <div className="top">
                    {/* <Image alt="logo" src="./movie-hub-logo_vx2bju.png" width={50} height={50} className="sidebar-logo"/> */}
                </div>
                <ul className="buttons-information">
                    <li>Hello el nombre</li>
                    <li ><div className="title-icon"> Upload Movie <Link href="/form"><FaUpload className="upload-buton" size={25} /></Link></div></li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    )
}