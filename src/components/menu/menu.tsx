"use client";

import React from 'react'
import "./menu.css"
import Link from 'next/link';
import { useUIStore } from '@/store';

export const Menu = () => {


  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen);
  const closeMenu = useUIStore( state => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
          // Background black
          <div className='bg-menu'></div>
      )
      }

      {isSideMenuOpen && (

        // {/* blur de fondo */}
        <div className='bg-menu-blur'></div>

      )}

        {/* Barra lateral */}
        <nav className='menu-lateral'>
            {/* hacer efecto de hover aún */}

            <button className='menu-button' onClick={ () => console.log("click")}>Open/Close</button>
              <Link href="/">Hola</Link>
              <Link href="/">Hola 1</Link>
              <Link href="/">Hola 2</Link>
            <ul>
              <li>Upload movie</li>
              <li>logout</li>
            </ul>
        </nav>
    </div>
  )
}
