import React from 'react'
import { motion } from 'framer-motion'
import whitearrow from '../assets/Vector (1).svg';
import bluearrow from '../assets/Vector.svg';
import up from '../assets/Decor.svg';
import down from '../assets/Decor (1).svg';
import image1 from '../assets/Rectangle 1.jpg'
import '../Style/home.css'
import zippo from '../assets/Zippo logo.svg'
import grammar from '../assets/grammarly logo.svg'
import gold from '../assets/GoodLeap_Orange_Logo logo.svg'
import google from '../assets/google logo.svg';
import loom from '../assets/Group.svg'
import {logos} from '../data'
import About from '../pages/About'
import Service from '../pages/Service';
import Benefit from '../pages/Benefit';
import Faq from '../pages/Faq';
import Group  from '../pages/Group';
import Footer from '../pages/Footer'

const constantvariant = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1
        },
    }
}

const marqueeVariants = {
    animate: {
      x: ['-100%', '-100%'],
      transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
      },
    },
  };


const  markvariants = {
    transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
          yoyo: Infinity

    }
}



const Home = () => {
    return (
        <>
            <main className = 'back-ground-image py-4'>
                <section className = 'container pads'>
                    <section className = 'd-md-flex justify-content-between align-items-center flex-content'>
                        <div className = 'word-wrapper'>
                            <h1 className = 'start-h1-tag'>Providing Support for Startups</h1>
                            <p className = 'start-p-tag'>Empowering visionary entreprenuers with the capital and support needed to transform innovative ideas into successful businesses.</p>
                            <div className = 'd-md-flex gap-4 align-items-center mt-4 pt-2 flex-content-2'>
                              <motion.div className = 'd-flex gap-2 align-items-center justify-content-center book-div-2-1'
                                whileHover= {{
                                    cursor: 'pointer'
                                }}
                               >
                               <p>Partner with Us</p>
                               <motion.img src= {whitearrow} alt=""
                                 initial={{opacity: 0}}
                                 animate = {{opacity: 1 }}
                                 transition={{delay: 1, duration: 1}}
                                />
                               </motion.div>
                               <motion.div className = 'd-flex gap-2 justify-content-center align-items-center book-div-1-1'
                                  whileHover = {{
                                      backgroundColor: '#B1AD4E',
                                      cursor: 'pointer'
                                   }}
                                  >
                                  <p>Book a Strategy Call</p>
                                  <motion.img  src= {bluearrow} alt=""
                                     variants = {constantvariant}
                                     initial = 'hidden'
                                     animate = 'show'
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div className = 'image-wrapper d-flex flex-column position-relative'>
                            <div className = 'up-position'>
                                <img src= {up} alt="" className = 'up-image' />
                            </div>
                            <div className = ' d-flex justify-content-center align-items-center my-5 post-image '>
                               <img src= {image1} alt="" className = 'image-1-pic'/>
                            </div>
                            <div className = 'down-position'>
                               <img src= {down} alt="" className = ''/>
                            </div>
                        </div>
                    </section>
                    <section className = 'd-flex justify-content-between my-5 mark-space'>
                        <p className = 'trust-p'>Trusted Partnership with 100+ company's</p>
                        <div className = 'marquee-border d-flex'>
                          {/* <motion.div className = 'd-flex mars-width flex-shrink-1'
                            initial = {{ x: 0}}
                            animate = {{ x: '100%' }}
                            transition = {{ duration: 10, repeat: Infinity ,ease: 'linear' }}
                            variants = {markvariants}
                            transition = 'transition'
                                                      
                          >
                            <img src= {zippo} alt=""/>
                            <img src= {grammar} alt=""/>
                            <img src= {gold} alt=""/>
                            <img src= {google} alt=""/>
                            <img src= {loom} alt=""/>
                        </motion.div>
                          <motion.div className = 'd-flex mars-width flex-shrink-1'
                            initial = {{ x: 0}}
                            animate = {{ x: '100%' }}
                            transition = {{ duration: 10, repeat: Infinity, ease: 'linear' , delay: 3 }}
                                                      
                          >
                            <img src= {zippo} alt=""/>
                            <img src= {grammar} alt=""/>
                            <img src= {gold} alt=""/>
                            <img src= {google} alt=""/>
                            <img src= {loom} alt=""/>
                        </motion.div> */}

                        </div>
                         <section className = 'marquee-wrapper mt-2 '>
                            <section className = 'marquee-content'>
                            <img src= {zippo} alt="" className = 'item item1'/>
                            <img src= {grammar} alt="" className = 'item item2'/>
                            <img src= {gold} alt="" className = 'item item3'/>
                            <img src= {google} alt=""className = 'item item4'/>
                            <img src= {loom} alt="" className = 'item item5'/>
                             </section>
                         </section>
                    </section>
                   
                </section>
            </main>
            <About/>
            <Service/>
            <Benefit/>
            <Group/>
            <Faq/>
            <Footer/>
        </>
    )
}

export default Home
