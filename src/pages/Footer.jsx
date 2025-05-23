import React from 'react'
import ventimg from '../assets/Logo.svg';
import ICON1 from '../assets/ICONS.svg';
import ICON2 from '../assets/ICONS (2).svg';
import ICON3 from '../assets/ICONS (3).svg';
import ICON4 from '../assets/ICONS (4).svg';
import { motion } from 'framer-motion'
import '../Style/footer.css'





const Footer = () => {
    return (
        <>
            <main className = 'background-footer pt-4 pb-2'>
                <section className = 'container about-footer my-5'>
                    <section className = 'd-md-flex justify-content-between footer-flex '>
                        <section className = 'vent-width1 d-flex flex-column gap-3'>
                           <div className = 'd-flex gaps align-items-cente'>
                             <img src= {ventimg} alt="" className = 'vent-image'/>
                             <h2 className = 'vent-h3 mt-2'>VENTSPHERE</h2>
                           </div>
                           <div> 
                               <p className = 'vent-p'>Empowering visionary startups to reach new heights through funding and support.</p>
                           </div>
                           <div className = 'd-flex gap-4'>
                               <img src= {ICON1} alt=""/>
                               <img src= {ICON2} alt=""/>
                               <img src= {ICON3} alt=""/>
                               <img src= {ICON4} alt=""/>
                           </div>
                        </section>
                        
                         <section className = 'vent-width2 d-flex flex-column gap-3'>
                            <div>
                               <h5 className = 'quick-h'>Quick</h5>
                            </div>
                            <div className = 'footer-p'>
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}} >Our Service</motion.p>
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}} >Benefits Offered</motion.p> 
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}} >Mission & Vision</motion.p>
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}} >FAQ</motion.p>
                            </div>
                         </section>
                         <section className = 'vent-width3 d-flex flex-column gap-3'>
                            <div>
                                <h5 className = 'quick-h'>Partnership</h5>
                            </div>
                            <div className = 'footer-p'> 
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>Seed Funding</motion.p>
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>Investor Partner</motion.p>
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>Mentorship</motion.p>
                              <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>Partnership</motion.p>
                            </div>
                         </section>
                         <section className = 'vent-width4 d-flex flex-column gap-3'>
                            <div>
                                <h5 className = 'quick-h'>Contact Us</h5>
                            </div>
                            <div className = 'footer-p'>
                                <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>+1 (123) 456-7890</motion.p>
                                <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>contact@ventsphere.com</motion.p>
                                <motion.p whileHover = {{ x: 13 }}  transition = {{ delay: 0, duration: 0.3, ease: "easeIn"}}>Location Map*</motion.p>
                            </div>
                         </section>
                    </section>
                </section>
                {/*  */}
                <hr/>
                <div className = 'container  d-md-flex justify-content-between foot py-3'>
                    <span className = 'copy'>&copy; 2024 Ventsphere Inc. All Right Reserved.</span>
                    <span className = 'terms'>Terms & Conditions . Privacy Policy</span>
                </div>
            </main>
        </>
    )
}

export default Footer
