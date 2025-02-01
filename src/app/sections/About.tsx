import React from 'react'
import aboutImage from '../assets-20250131T085004Z-001/assets/images/about.jpg'
import './About.css'
import Image from 'next/image';

export default function About() {
  return (
   <section id='about' className='about'>
    <div className="container" data-aos='fade-up'>
     <div className="row">
      <div className="col-lg-6 order-1 order-lg-2" data-aos='zoom-in' data-aos-delay='100'>
       <div className="about-img">
        <Image src={aboutImage} alt=''/>
       </div>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-6 order-2 order-lg-1 content">
       <h3>Voluptatea dignissimos provident quasi corporis voluptates sit assumends</h3>
       <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga nesciunt dignissimos ab omnis placeat perferendis reiciendis quaerat modi dolores fugit eveniet consequuntur neque. Ea deserunt vero mollitia assumenda magni!</p>
      </div>
     </div>
    </div>
   </section>
  )
}
