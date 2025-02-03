import React from 'react'
import { motion } from 'framer-motion'
import whitearrow from '../assets/Vector (1).svg';
import bluearrow from '../assets/Vector.svg';
import up from '../assets/Decor.svg';
import down from '../assets/Decor (1).svg';
import image1 from '../assets/Rectangle 1.jpg'
import '../Style/home.css'





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
                                      backgroundColor: '#B1AD4E'
                                   }}
                                  >
                                  <p>Book a Strategy Call</p>
                                  <motion.img  src= {bluearrow} alt=""
                                     variants = {constantvariant}
                                     initial = 'hidden'
                                     animate = 'show'
                                     whileHover = {{
                                     scale: 1.1,
                                     rotate : 45,
                                     cursor: 'pointer',
                                     }}
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
                    <section>
                        <p>Trusted Partnership with 100+ company's</p>
                        <div>

                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Home
