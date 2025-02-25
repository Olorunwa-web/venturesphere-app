import React, { useState } from 'react';
import { Outlet} from 'react-router-dom'
import ventimg from '../assets/Logo.svg';
import bluearrow from '../assets/Vector.svg';
import whitearrow from '../assets/Vector (1).svg';
import OffCanvas from '../Lib/OffCanvas'
import '../Style/Navbar.css';
import { motion } from 'framer-motion'
import About from '../pages/About'
import { Link } from 'react-scroll'

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




const Navbar = () => {


    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <>
            <main className = 'nav-main'>
                <section className = 'container d-flex justify-content-between align-items-center py-3 space-nav'>
                   <section className = 'd-flex gap-5 nav-space  align-items-center'>
                       <div className = 'd-flex gaps align-items-cente'>
                          <img src= {ventimg} alt="" className = 'vent-image'/>
                          <h2 className = 'vent-h3 mt-2'>VENTSPHERE</h2>
                       </div>
                       <div className = ' d-none d-lg-flex gap-5 align-items-center nav-home pt-3'>
                           <p><Link to = "service" smooth = {true} duration = {500} >Service</Link></p>
                           <p><Link to = "about" smooth = {true} duration = {500} >About us</Link></p>
                           <p><Link to = "benefit" smooth = {true} duration = {500} >Benefit</Link></p>
                           <p><Link to = "faq" smooth = {true} duration = {500} >FAQ ? </Link></p>
                       </div>
                   </section>
                   <section>
                 
                   </section>
                   <section className = 'd-none d-md-flex gap-4 align-items-center nav-flex-space'>
                       <motion.div className = 'd-flex gap-2 align-items-center book-div-1' whileHover= {{cursor: "pointer"}}> 
                           <p>Book a Strategy Call</p>
                           <motion.img  src= {bluearrow} alt=""
                             variants = {constantvariant}
                             initial = 'hidden'
                             animate = 'show'
                            
                           />
                       </motion.div>
                        <motion.div className = 'd-flex gap-2 align-items-center justify-content-center book-div-2' >
                             <p>Partner with Us</p>
                                 <motion.img src= {whitearrow} alt=""
                                   initial={{opacity: 0}}
                                   animate = {{opacity: 1 }}
                                   transition={{delay: 1, duration: 1}}
                                 />
                        </motion.div>
                   </section>
                   <div className = 'd-md-none nav-harm'>
                   {['top'].map((placement, idx) => (
                      <OffCanvas key={idx} placement={placement} name={placement} />
                     ))}
                   </div>
                </section>
            </main>
            <Outlet/>
        </>
    )
}

export default Navbar
