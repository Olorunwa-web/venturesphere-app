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
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom';





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
           <Element name = 'home'>

            <main className = 'back-ground-image py-4'>
                <section className = 'container pads'>
                    <motion.section className = 'd-md-flex justify-content-between align-items-center flex-content'
                     initial= {{ opacity: 0, }}
                     animate = {{opacity: 1 }}
                     transition = {{ delay: 0.3, duration: 1, ease: 'easeInOut'}}
                    >
                        <div className = 'word-wrapper'>
                            <h1 className = 'start-h1-tag'>Providing Support for Startups</h1>
                            <p className = 'start-p-tag'>Empowering visionary entreprenuers with the capital and support needed to transform innovative ideas into successful businesses.</p>
                            <div className = 'd-md-flex gap-4 align-items-center mt-4 pt-2 flex-content-2'>
                              <Link to = '/register' className = 'text-decoration-none omo-div'>
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
                              </Link>
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
                            <motion.div className = 'up-position'
                             initial = {{ rotate: 0 }}
                             animate = {{ rotate: 360}}
                             transition = {{ duration: 1, ease: 'easeInOut' }}
                            >
                                <img src= {up} alt="" className = 'up-image' />
                            </motion.div>
                            <div className = ' d-flex justify-content-center align-items-center my-5 post-image '>
                               <img src= {image1} alt="" className = 'image-1-pic'/>
                            </div>
                            <div className = 'down-position'>
                               <img src= {down} alt="" className = ''/>
                            </div>
                        </div>
                    </motion.section>
                    <section className = 'd-flex justify-content-between my-5 mark-space'>
                        <p className = 'trust-p'>Trusted Partnership with 100+ company's</p>
                       
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
           </Element>
            <About/>
            <Service/>
            <Benefit/>
            <Group/>
            <Faq/>
        </>
    )
}

export default Home
