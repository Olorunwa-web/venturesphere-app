import React, { useState } from 'react'
import { Element } from 'react-scroll';
import '../Style/faq.css'
import plus from '../assets/ic_round-plus.svg';
import minus from '../assets/ic_round-minus.svg'




const Faq = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(true);

    const [isClose, setIsClose] = useState(false);



  
    return (
        <>
            <Element name = "faq">
                <main className = 'background-que py-5'>
                    <section className = 'container py-5 about-pad'>
                        <section className = 'd-lg-flex justify-content-between flex-faqs'>
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
                    </section>
                </main>
                
            </Element>
        </>
    )
}

export default Faq
