import React from 'react';

// import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero/Hero';
import Programs from './Component/Programs/Programs';
import { Title } from './Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonials from './Component/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <div className='container'>   
     <Title subTitle = 'Our Program' title='What We Offer'/>
       <Programs/>
       <About/>
       <Title subTitle='gallery' title='campus photos'/>
       <Campus/>
       <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonials/>
      </div>

    </div>
  );
}

export default App;
