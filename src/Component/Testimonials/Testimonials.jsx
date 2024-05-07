import React from 'react'
import './Testimonials.css'
import next_icon from '../../images/next-icon.png'
import back_icon from '../../images/back-icon.png'
import user_1 from '../../images/user-1.png'
import user_2 from '../../images/user-2.png'
import user_3 from '../../images/user-3.png'
import user_4 from '../../images/user-4.png'



export default function Testimonials() {
    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' />
            <img src={back_icon} alt='' className='back -btn' />
            <div className='slider'>
                {/* <ul>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Saepe, in soluta. Libero 
                              ullam molestias veniam incidunt quasi cumque 
                               laborum velit? Ea necessitatibus fugiat 
                                voluptatibus mollitia distinctio 
                                 voluptatum, ullam qui facere.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Saepe, in soluta. Libero 
                              ullam molestias veniam incidunt quasi cumque 
                               laborum velit? Ea necessitatibus fugiat 
                                voluptatibus mollitia distinctio 
                                 voluptatum, ullam qui facere.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Saepe, in soluta. Libero 
                              ullam molestias veniam incidunt quasi cumque 
                               laborum velit? Ea necessitatibus fugiat 
                                voluptatibus mollitia distinctio 
                                 voluptatum, ullam qui facere.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Saepe, in soluta. Libero 
                              ullam molestias veniam incidunt quasi cumque 
                               laborum velit? Ea necessitatibus fugiat 
                                voluptatibus mollitia distinctio 
                                 voluptatum, ullam qui facere.</p>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}
