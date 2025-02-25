import React from 'react'
import { Element } from 'react-scroll'
import route from '../assets/route-01.svg';
import idea from '../assets/idea-01.svg';
import '../Style/about.css'

const About = () => {
    return (
        <>
           <Element name = "about" >
                 <main className = 'background-color-about py-4 '>
                     <section className = 'container about-pad my-5'>
                          <p className = 'about-p-tag text-center'>WHO WE ARE</p>
                          <h2 className = 'about-h1-tag text-center mb-5'>Your Dedicated Partner in Startup Success</h2>
                          <div className = 'd-flex justify-content-between flex-mission mt-4'>
                              <div className = 'background-mission d-flex flex-column justify-content-between '>
                                     <div className = 'image-mission-width'>
                                        <img src= {route} alt="" className = 'image-mission'/>
                                      </div>
                                       <div className = 'mission'>
                                          <h5 className = 'mb-4'>Our Mission</h5>
                                          <p className = ''>Our mission is to support startups by providing not only financial investment but also strategic guidance, mentorship, and access to robust network of industry experts.</p>
                                       </div>
                                </div>
                              <div className = 'background-vision d-flex flex-column justify-content-between'>
                                  <div className = 'image-mission-width'>
                                      <img src= {idea} alt=""/>
                                  </div>
                                  <div className = 'missions'>
                                      <h5 className = 'mb-4'>Our Vision</h5>
                                      <p>To be the leading venture capital agency that fuels innovation and empowers entrepreneurs, creating a thriving ecosystem where visionary startups can flourish and make a lasting impact on the world.</p>
                                  </div>

                              </div>
                          </div>
                     </section>
                 </main>
           </Element>
        </>
    )
}

export default About
