import React from 'react'
import { Element } from "react-scroll";
import fund from '../assets/money-send-circle.svg';
import tie from '../assets/school-tie.svg';
import affiliate from '../assets/affiliate.svg';
import agree from '../assets/agreement-01.svg'
import '../Style/service.css'
import { motion } from 'framer-motion'
import whitearrow from '../assets/Vector (1).svg';
import { Link } from 'react-router-dom'


const Service = () => {
    return (
        <>
            <Element name = "service"> 
                 <main className = 'background-service py-5' >
                     <section className = ' container about-pad my-5 '>
                         <h6 className = 'about-p-tag text-center pb-1'>WHAT WE DO</h6>
                         <h2 className = 'service-h2-tag text-center pb-3'>Financial Banking You Need to Succeed</h2>
                         <p className = 'service-p-tag text-center '>We understand that financial support is foundational to startup growth, which is why we offer.</p>
                         <section className ='d-flex flex-column flex-service my-5'>
                         <section className = 'd-flex justify-content-between flex-ser '>
                             <section className = 'section-2-div-1'>
                                 <div>
                                  <div className = 'service-image-width'>
                                      <img src={fund} alt="" className = ''/>
                                  </div>
                                 </div>
                                  <div className = 'service d-flex flex-column gap-2'>
                                      <h6>Seed Funding</h6>
                                      <p>We provide initial capital to early-stage startups, helping them turn innovative ideas into viable businesses.</p>
                                  </div>
                             </section>
                             <section className = 'section-2-div-1'>
                                 <div>
                                   <div className = 'service-image-width'>
                                      <img src={tie} alt=""/>
                                  </div>
                                 </div>
                                  <div className = 'services d-flex flex-column gap-2'>
                                      <h6>Mentorship and Coaching</h6>
                                      <p>We provide flexible funding options designed to match the unique needs of your startup, helping you grow at every stage.</p>
                                  </div>
                             </section>
                         </section>
                         <section className = 'd-flex justify-content-between flex-ser'>
                             <section className = 'section-2-div-1'>
                                 <div>
                                  <div className = 'service-image-width'>
                                      <img src={affiliate} alt=""/>
                                  </div>
                                 </div>
                                  <div className = 'services d-flex flex-column gap-2'>
                                      <h6>Post-Investment Support</h6>
                                      <p>We provide flexible funding options designed to match the unique needs of your startup, helping you grow at every stage.</p>
                                  </div>
                             </section>
                             <section className = 'section-2-div-1'>
                                 <div>
                                  <div className = 'service-image-width'>
                                      <img src={agree} alt=""/>
                                  </div>
                                 </div>
                                  <div className = 'service d-flex flex-column gap-2'>
                                      <h6>Strategic Partnerships</h6>
                                      <p>Access our extensive network to forge partnerships that can open doors and drive meaningful growth for your business.</p>
                                  </div>
                             </section>
                         </section>
                         </section>
                         <div className = 'my-4 d-flex justify-content-center align-items-center pt-4'>
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
                         </div>
                     </section>
                 </main>
            </Element>
        </>
    )
}

export default Service
