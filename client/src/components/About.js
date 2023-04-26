import React, { useContext } from 'react'
import {AiOutlineKey} from "react-icons/fa";


export default function About(){


  return (
    <div className="profile">
      <h1 className="about">About Me</h1>
      <div className='me'>
        <img className='meimg' src="/images/IMG-1451.jpg" alt=''/>
        <h4 className='mestory'> My name is Terrence Robertson, I'm from Houston Texas and grew up in a lower class area called Rosewood.
          I've always dreamed big and knew I was destined for all great things. After the passing of my beloved Grandmother Doris Williams, 
          I inherited property. Years later, the property owners next to mine, wasnt interested in keeping their land and sold it for $7800. 
          Even though at that time I had no idea what I wanted to do with the property, i dwelled in the fact that It was mine.
          Few years later, I decided to learn about building and owning Real estate and started going to seminars and placing myself 
          around the right people who I could learn from. Summer 2022 I built and sold my first set of duplexes. 
          I was excited and proud of myself, but in my mind Im thinking "Whats my next move".  
          </h4>
        </div>

      <hr/>
    <div className='the-end'>
      <h5 className='end'>Below I'd like to share some photos from my experience and hopefuly to encourage and motivate all that I can. We all can do it!
      Any question are concers, head over to the Public page comment there, I will respond at my earliest convenience.</h5>
      </div>
      <div className='imgcontainer'>
      <img className='bottomimg' src="/images/IMG-1450.jpg" alt=''/>
      <img className='bottomimg' src="/images/IMG-2259.jpg" alt=''/>
      <img className='bottomimg' src="/images/IMG-2256.jpg" alt=''/>

      <img className='bottomimg' src="/images/IMG-1446.jpg" alt=''/>
      <img className='bottomimg' src="/images/IMG-2252new.jpeg" alt=''/>
     


      </div>

    </div>

      
  )
  }