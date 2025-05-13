import React from 'react';
import {Link, Outlet, NavLink, useNavigate, useLocation} from 'react-router-dom'
import ventimg from '../assets/Logo.svg';
import bluearrow from '../assets/Vector.svg';
import whitearrow from '../assets/Vector (1).svg';
import OffCanvas from '../Lib/OffCanvas'
import '../Style/Navbar.css';
import { motion } from 'framer-motion'
import About from '../pages/About'
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




const Navbar = () => {

    const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false }); 
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };


    return (
        <>
            <main className = 'nav-main'>
                <section className = 'container d-flex justify-content-between align-items-center py-3 space-nav'>
                   <section className = 'd-flex gap-5 nav-space  align-items-center'>
                       <Link to = "/"  className = 'd-flex gaps align-items-cente text-decoration-none'>
                          <img src= {ventimg} alt="" className = 'vent-image'/>
                          <h2 className = 'vent-h3 mt-2'>VENTSPHERE</h2>
                       </Link>
                       <div className = ' d-none d-lg-flex gap-5 align-items-center nav-home pt-'>
                           <NavLink to = "#" onClick={() => handleScroll('service')} className = 'nav-home-p'>Service</NavLink>
                           <NavLink to = "#" onClick={() => handleScroll('aboutus')} className = 'nav-home-p'>About us</NavLink>
                           <NavLink to = "#" onClick={() => handleScroll('benefit')} className = 'nav-home-p' >Benefit</NavLink>
                           <NavLink to = "#" onClick={() => handleScroll('faq')} className = 'nav-home-p' >FAQ ? </NavLink>
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
                        <Link to = '/register' className = 'text-decoration-none'>
                           <motion.div className = 'd-flex gap-2 align-items-center justify-content-center book-div-2' >
                             <p>Partner with Us</p>
                                 <motion.img src= {whitearrow} alt=""
                                   initial={{opacity: 0}}
                                   animate = {{opacity: 1 }}
                                   transition={{delay: 1, duration: 1}}
                                 />
                           </motion.div>
                        </Link>
                   </section>
                   <div className = 'd-md-none nav-harm'>
                   {['top'].map((placement, idx) => (
                      <OffCanvas key={idx} placement={placement} name={placement} />
                     ))}
                   </div>
                </section>
            </main>
            <Outlet/>
             <Footer/>
        </>
    )
}

export default Navbar
