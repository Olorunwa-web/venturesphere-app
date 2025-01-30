import React from 'react';
import ventimg from '../assets/Logo.svg';
import bluearrow from '../assets/Vector.svg';
import whitearrow from '../assets/Vector (1).svg';
import OffCanvas from '../Lib/OffCanvas'
import '../Style/Navbar.css'

const Navbar = () => {
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
                           <p>Service</p>
                           <p>About us</p>
                           <p>Benefits</p>
                           <p>FAQ ?</p>
                       </div>
                   </section>
                   <section>
                 
                   </section>
                   <section className = 'd-none d-md-flex gap-4 align-items-center nav-flex-space'>
                       <div className = 'd-flex gap-2 align-items-center book-div-1'>
                           <p>Book a Strategy Call</p>
                           <img src= {bluearrow} alt=""/>
                       </div>
                        <div className = 'd-flex gap-2 align-items-center justify-content-center book-div-2'>
                             <p>Partner with Us</p>
                             <img src= {whitearrow} alt=""/>
                        </div>
                   </section>
                   <div className = 'd-md-none'>
                   {['top'].map((placement, idx) => (
                      <OffCanvas key={idx} placement={placement} name={placement} />
                     ))}
                   </div>
                </section>
            </main>
        </>
    )
}

export default Navbar
