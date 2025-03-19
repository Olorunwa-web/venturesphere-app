import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuicon from '../assets/menu_33dp_1F253F_FILL0_wght400_GRAD0_opsz40.svg';
import ventimg from '../assets/Logo.svg';
import bluearrow from '../assets/Vector.svg';
import whitearrow from '../assets/Vector (1).svg';
import { Link } from 'react-scroll'


const OffCanvas = ({ name, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <main>
                <div onClick={handleShow}>
                    <img src= {menuicon} alt="" className = 'image-icon'/>
                </div>
                <Offcanvas show={show} onHide={handleClose} {...props} className = 'h-75 off-set'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                         <div className = 'd-flex gaps align-items-cente'>
                            <img src= {ventimg} alt="" className = 'vent-image'/>
                            <h2 className = 'vent-h3 pt-2'>VENTSPHERE</h2>
                         </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                     <Offcanvas.Body>
                         <section className = 'd-flex flex-column gap-4'>
                            <div className = 'd-flex flex-column  nav-homes pt-2'>
                               <p><Link to = "service" smooth = {true} duration = {500} >Service</Link></p>
                               <p><Link to = "about" smooth = {true} duration = {500} >About us</Link></p>
                               <p><Link to = "benefit" smooth = {true} duration = {500} >Benefit</Link></p>
                               <p><Link to = "faq" smooth = {true} duration = {500} >FAQ ? </Link></p>
                            </div>
                            <div className = 'd-flex flex-column gap-3'>
                               <div className = 'd-flex gap-2 align-items-center book-div-1 ps-4'>
                                  <p>Book a Strategy Call</p>
                                  <img src= {bluearrow} alt=""/>
                               </div>
                               <div className = 'd-flex gap-2 align-items-center justify-content-center book-div-2'>
                                   <p>Partner with Us</p>
                                   <img src= {whitearrow} alt=""/>
                               </div>
                            </div>
                         </section>
                     </Offcanvas.Body>
               </Offcanvas>
            </main>
        </>
    )
}

export default OffCanvas
