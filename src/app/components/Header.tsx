'use client'
import React, {useState, useEffect} from 'react'
import './Header.css'
import Link from 'next/link';
import AppBtn from './AppBtn';
import Nav from './Nav';
export default function Header() {
  const [scroll, setScroll]=useState(0);
 
  useEffect(()=>{
   window.addEventListener('scroll', ()=>{
    setScroll(window.scrollY);
   });
   return()=>{
    window.removeEventListener('scroll', ()=>{
     setScroll(window.scrollY);
    });
   };
  }, [scroll]);
  return (
   <header id='header' className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled ':undefined}`} >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
     <h1 className="logo mc-auto mc-lg-0">
     <Link href="/">Restaurant</Link>
     </h1>
     <Nav/>
     <AppBtn name='book a table'/>
    </div>
   </header>

  )
}
