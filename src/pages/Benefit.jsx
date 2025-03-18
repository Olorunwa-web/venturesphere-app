import React from 'react'
import { Element } from 'react-scroll';
import '../Style/benefit.css'
import up from '../assets/Decor.svg';
import down from '../assets/Decor (1).svg';
import image2 from '../assets/Image.jpg'
import { motion } from 'framer-motion'
import whitearrow from '../assets/Vector (1).svg';
import image3 from '../assets/Image@2x.jpg'




const Benefit = () => {
    return (
        <>
           <Element name = "benefit">
               <section className = 'background-benefit py-3'>
                   <section className = 'container py-5 about-pad my-4 d-flex flex-column gap-5'>
                         <section className = 'section-1 position-relative py-5'>
                              <div className = 'd-md-flex justify-content-between align-items-cente flex-content-services '>
                                  <div className = 'benefit-wrapper'>
                                     <h2 className = 'benefit-wrapper-h2 mb-4'>Unlocking Potential for Ambitious Startups</h2>
                                     <p className = 'benefit-wrapper-p'>We empower startups with essential resources and guidance to thrive. Our tailored support provides not only captial but also strategic insights, mentorship, and access to a vast network of industry experts.</p>
                                     <div className = 'mt-5'>
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
                                     </div>
                                  </div>
                                  <div className = 'benefit-image-wrapper position-relative'>
                                      <div className = 'position-up-image'>
                                        <img src= {up} alt=""/>
                                     </div>
                                      <div className = 'image-benefit'>
                                        <img src= {image2} alt="" className = 'benefit-image'/>
                                     </div>
                                     <div className = 'position-down-image'>
                                        <img src= {down} alt=""/>
                                    </div>
                                  </div>
                              </div>
                         </section>
            
                         <section className = 'section-2 position-relative '>
                              <div className = 'd-md-flex justify-content-between align-items-cente flex-content-services-1'>
                                  <div className = 'benefit-image-wrappers position-relative'>
                                      <div className = 'position-up-images'>
                                        <img src= {up} alt=""/>
                                     </div>
                                      <div className = 'image-benefits'>
                                        <img src= {image3} alt="" className = 'benefit-images'/>
                                     </div>
                                     <div className = 'position-down-images'>
                                        <img src= {down} alt=""/>
                                    </div>
                                  </div>
                                  <div className = 'benefit-wrappers'>
                                     <h2 className = 'benefit-wrapper-h2 mb-4'>Partner with seasoned professionals</h2>
                                     <p className = 'benefit-wrapper-p'>We empower startups with essential resources and guidance to thrive. Our tailored support provides not only captial but also strategic insights, mentorship, and access to a vast network of industry experts.</p>
                                     <div className = 'mt-5'>
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
                                     </div>
                                  </div>
                              </div>
                         </section>
                   </section>
               </section>
           </Element>
        </>
    )
}

export default Benefit
