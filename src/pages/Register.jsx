import React from 'react'
import up from '../assets/Decor.svg';
import down from '../assets/Decor (1).svg';
import arrowdown from '../assets/arrow-down-01@2x.svg'
import '../Style/register.css'
const Register = () => {
    return (
        <>
            <main className = 'background-register py-5'>
                <section className = 'container register-pad  my-5'>
                    <section className = 'd-lg-flex justify-content-between register-flex'>
                        <section className = 'part-width'>
                            <h6 className = 'join-vent'>JOIN VENTSPHERE</h6>
                            <h2 className = 'part-vent'>Partner With Us</h2>
                            <div>
                                <p className = 'fill'>Fill out the form and our team will get back to you shortly to discuss how we can support your growth and success.</p>
                                <div className = 'd-flex flex-column gap-2'>
                                    <span className = 'faq-info'>For more inquiries. reach us at </span>
                                    <span className = 'faq-span'>contact@ventsphere.com</span>
                                </div>
                            </div>
                        </section>
                        <section className = 'form-width position-relative'>
                            <div className = 'position-up-decor'>
                                <img src={up} alt=""/>
                            </div>
                            <div className = 'form-wraps'>
                            <form action="" className = 'form-data d-flex flex-column gap-4'>
                                <div className = 'd-md-flex gap-3 justify-content-between name-flex'>
                                    <div  className = 'width-input'>
                                        <label htmlFor="" className = 'label-name'>Full Name</label>
                                        <input type="text" placeholder = "e.g. Augustine Ifenna" className = 'w-100 input-group'/>
                                    </div>
                                    <div className = 'width-input'>
                                        <label htmlFor="" className = 'label-name'>Email</label>
                                        <input type="email" name="" placeholder = 'hello@ifennaustine.com' className = 'w-100 input-group'/>
                                    </div>
                                </div>
                                <div className = 'position-relative'>
                                    <label htmlFor="" className = 'label-name'>Applying for:</label>
                                    <select name="" id="" className = 'w-100 input-groups'>
                                        <option value=""   className = ''>Partnership</option>
                                        <option value="">Seeding Funding</option>
                                        <option value="">Mentorship</option>
                                        <option value="">Investor Partner</option>
                                    </select>
                                    <img src= {arrowdown} alt="" className = 'select-icon'/>
                                </div>
                                <div>
                                    <label htmlFor="" className = 'label-name'>Message*</label>
                                    <textarea name="" id="" placeholder = 'Tell us more about...'></textarea>
                                </div>
                                <div>
                                    <button className = 'w-100 sub-btn'>Submit</button>
                                </div>
                            </form>
                            </div>
                            <div className = 'position-down-decor'> 
                                <img src={down} alt=""/>
                            </div>
 

                
                        </section>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Register
