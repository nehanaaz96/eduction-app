import React from 'react'
import './About.css'
import about_img from '../../images/about.png'
import play_icon from '../../images/play-icon.png'

export default function About() {
  return (
    <div className = "about">
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img'/>
            <img src={play_icon} alt='' className='play_icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSICTY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nihil minima exercitationem necessitatibus nulla quam eum 
               libero a itaque consequatur distinctio quod soluta sed 
                error, laudantium illum! Officia, porro. Est, sequi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                 elit. Incidunt, quaerat sunt deserunt ab, sit a, 
                  architecto veniam vitae dignissimos obcaecati vel 
                   placeat soluta expedita fugiat similique velit qui 
                    reprehenderit dicta?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
                     elit. Facere dolores ullam nobis itaque repellat. Rem 
                      iure accusantium corrupti totam, similique repellat 
                       repudiandae magnam libero quia quae. Natus dolorem 
                        cumque eveniet!</p>
        </div>

    </div>
  )
}
