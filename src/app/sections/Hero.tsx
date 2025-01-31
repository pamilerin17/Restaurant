'use client'
import React, {useEffect} from 'react'
import GLightbox from 'glightbox'
import './Hero.css'
import HeroBtn from '../components/HeroBtn'

export default function Hero() {
 useEffect (()=>{
  new GLightbox({
   selector: '.glightbox',
  });
 }, [])
  return (
   <section id='hero' className='d-flex align-items-center'>
    <div className="container position-relative text-center text-lg-start" data-aos='zoom-in' data-aos-delay='100'>
     <div className="row">
      <div className="col-lg-8">
       <h1>Welcome to yammy <span>Restaurant</span></h1>
       <h2>Delivering great food for more than 18 years</h2>
       <div className="btns">
        <HeroBtn name='our menu' target='menu'/>
        <HeroBtn name='book a table' target='Book a table'/>
       </div>
      </div>
      <div className='col-lg-4 d-flex align-items-center justify-content-center position-relative' data-aos='zoom-in' data-aos-delay='200'>
       <a href="https://www.youtube.com/" className='glightbox play-btn'></a>
      </div>
     </div>
    </div>
   </section>
  )
}
