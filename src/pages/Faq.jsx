import React, { useState } from 'react'
import { Element } from 'react-scroll';
import upsright from '../assets/Decor (4).svg';
import downright from '../assets/Decor (5).svg';
import upsleft from '../assets/Decor (6).svg';
import downleft from '../assets/Decor (7).svg'
import '../Style/faq.css'
import plus from '../assets/ic_round-plus.svg';
import minus from '../assets/ic_round-minus.svg';
import bluearrow from '../assets/Vector.svg';
import { motion } from 'framer-motion'



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

const Faq = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(true);

    const [isClose, setIsClose] = useState(false);



  
    return (
        <>
            <Element name = "faq">
                <main className = 'background-que py-5 '>
                    <section className = 'container my-5 about-pad position-relative pass'>
                        <section className = 'd-lg-flex justify-content-between flex-faqs pb-5'>
                            <section className = 'faq-width'>
                                <h6 className = 'faqtag-h pb-2'>WE HAVE ANSWERS</h6>
                                <h2 className = 'faqtagh2 pb-2'>Frequently Asked Questions</h2>
                                <div>
                                    <p className = 'faq-explore'>Explore the most common inquiries to learn more about how we support startups like yours.</p>
                                    <div className = 'd-flex flex-column gap-2'>
                                        <span className = 'faq-info'>For more inquiries. reach us at </span>
                                        <span className = 'faq-span'>contact@ventsphere.com</span>
                                    </div>
                                </div>
                            </section>
                            <section className = 'accord-width d-flex flex-column gap-3'>
                              <div className="accordion ">
                                 <div>
                                   <div className="accordion-header" onClick={() => setIsClose(!isClose)}>
                                       <div>
                                         <span className="accordion-icon">{isClose ? <img src = {minus} className = 'icon' alt = ''/> : <img src = {plus} className = 'icons' alt = '' />}</span>
                                       </div>
                                       <div>
                                           <div className = ''>
                                             <span className = 'faq-accordion'>What types of startups do you work with?</span>
                                           </div>
                                           <div className={`accordion-content ${isClose ? "open" : "closed"}`}>
                                             <p className = 'faq-offer'>We offer mentorship, strategic guidance, and access to our network of industry experts to help you grow your business successfully.</p>
                                          </div>
                                       </div>
                                   </div>
                                </div>
                               </div>
                               <div className="accordion ">
                                 <div>
                                   <div className="accordion-header" onClick={() => setIsClose(!isClose)}>
                                       <div>
                                         <span className="accordion-icon">{isClose ? <img src = {minus} className = 'icon' alt = ''/> : <img src = {plus} className = 'icons' alt = '' />}</span>
                                       </div>
                                       <div>
                                           <div className = ''>
                                             <span className = 'faq-accordion'>How can I apply for funding?</span>
                                           </div>
                                           <div className={`accordion-content ${isClose ? "open" : "closed"}`}>
                                             <p className = 'faq-offer'>We offer mentorship, strategic guidance, and access to our network of industry experts to help you grow your business successfully.</p>
                                          </div>
                                       </div>
                                   </div>
                                </div>
                               </div>
                               <div className="accordion ">
                                 <div>
                                   <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                                       <div>
                                         <span className="accordion-icon">{isOpen ? <img src = {minus} className = 'icon' alt = ''/> : <img src = {plus} className = 'icons' alt = '' />}</span>
                                       </div>
                                       <div>
                                           <div className = ''>
                                             <span className = 'faq-accordion'>What support do you provide after funding?</span>
                                           </div>
                                           <div className={`accordion-content ${isOpen ? "open" : "closed"}`}>
                                             <p className = 'faq-offer'>We offer mentorship, strategic guidance, and access to our network of industry experts to help you grow your business successfully.</p>
                                          </div>
                                       </div>
                                   </div>
                                </div>
                               </div>
                               <div className="accordion ">
                                 <div>
                                   <div className="accordion-header" onClick={() => setIsClose(!isClose)}>
                                       <div>
                                         <span className="accordion-icon">{isClose ? <img src = {minus} className = 'icon' alt = ''/> : <img src = {plus} className = 'icons' alt = '' />}</span>
                                       </div>
                                       <div>
                                           <div className = ''>
                                             <span className = 'faq-accordion'>How long does the funding process take?</span>
                                           </div>
                                           <div className={`accordion-content ${isClose ? "open" : "closed"}`}>
                                             <p className = 'faq-offer'>We offer mentorship, strategic guidance, and access to our network of industry experts to help you grow your business successfully.</p>
                                          </div>
                                       </div>
                                   </div>
                                </div>
                               </div>
                            </section>
                        </section>

                        {/*  */}
                    
                        <section className = 'background-div-mid position-relative d-flex flex-column justify-content-between my-5'>
                                <div className = 'd-flex justify-content-between'>
                                   <div className = ''>
                                      <img src= {upsleft} alt="" className = 'ups'/>
                                   </div>
                                   <div className = ''>
                                      <img src={upsright} alt="" className = 'ups'/>
                                   </div>
                                </div>
                                <div className = 'position-absolute top-50 start-50 translate-middle text-center partner-tag '>
                                   <h3>Let's Partner for Your Startup Success!</h3>
                                   <p>Join us in transforming your startup vision into reality!</p>
                                   <div className = ''>
                                   <motion.div className = 'd-flex gap-2 justify-content-center align-items-center book-faq'
                                  whileHover = {{
                                      backgroundColor: '#B1AD4E',
                                      cursor: 'pointer'
                                   }}
                                  >
                                  <p>Partner With Us</p>
                                  <motion.img  src= {bluearrow} alt=""
                                     variants = {constantvariant}
                                     initial = 'hidden'
                                     animate = 'show'
                                    />
                                </motion.div>
                                   </div>
                                </div>
                                <div className = 'd-flex justify-content-between'>
                                    <div>
                                       <img src= {downleft} alt="" className = 'down'/>
                                    </div>
                                    <div>
                                        <img src= {downright} alt="" className = 'down'/>
                                    </div>
                                </div>
                        </section>
                    
                    </section>
                </main>
                
            </Element>
        </>
    )
}

export default Faq
