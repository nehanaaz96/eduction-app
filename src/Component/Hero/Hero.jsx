import React from 'react'
import './Hero.css'
import drak_arrow from '../../images/dark-arrow.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1> we Ensure better eduction for a better world</h1>
            <p> Our cutting-edge currigum is designed to empower students 
             with the khowledge, skills and expriences needed to excel in 
             the dynamic field of eduction</p>
             <button className='btn'>Explore more <img src= {drak_arrow} alt=''/></button>
        </div>
    </div>
  )
}
