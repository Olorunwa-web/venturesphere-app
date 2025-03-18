import React from 'react'
import image3 from '../assets/Img 3.jpg'
import quote from '../assets/Quote.svg';
import decor from '../assets/Decor (3).svg'
import test1 from '../assets/Testimonial 1.svg'
import test2 from '../assets/Testimonial 2.svg'
import test3 from '../assets/Testimonial 3.svg'
import test4 from '../assets/Testimonial 4.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/group.css'



const Group = () => {

    const settings = {
        dots: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991, 
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 1,
            },
          },
        ],
        
      };



    return (
        <>
           <main className = 'background-faq py-5'>
                      <section className = 'container pt-3 pb-5 about-pad '>
                          <div className = 'faq-tags text-center my-5'> 
                              <h6>TESTMONIALS</h6>
                              <h2>Success Stories from Visionary Founders</h2>
                          </div>
                          <section className = 'd-fle gap- justify-content-betwee w-100'>
                            
                            <Slider {...settings} className = ' slide'>
                                
                                 <div className = 'faq-1 item1'>
                                   <div className = 'image-div-width'>
                                       <img src= {image3} alt="" className = 'image-3'/>
                                   </div>
                                   <div className = 'faq-div '>
                                       <div className = 'quote'>
                                           <img src= {quote} alt=""/>
                                       </div>
                                       <div className = 'word-quote d-flex flex-column gap-3'> 
                                           <h6 className = 'faq-h-tag '>WORD FROM FOUNDER</h6>
                                           <h4 className = 'faq-h4-tag'>" We're committed to empowering startups with funding and guidance they need to succed."</h4>
                                           <div>
                                               <span className = 'spans-tag'>-</span>
                                               <span className = 'aug-span'>Augustine Ifenna</span>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                                
                    
                                 <div className = 'faq-2 sli'>
                                      <div className = 'd-flex flex-column gap-4 '>
                                        <div className = ' text-cent'>
                                           <img src= {decor} alt="" className = 'w-100'/>
                                         </div>
                                         <div>
                                            <h4 className = ' faq-h4-tags'>" Ventsphere's support has been pivotal, providing both the resources and expertise needed to scale our business."</h4> 
                                         </div>
                                      </div>
                                     <div className = 'd-flex gap-3 '>
                                         <img src= {test1} alt=""/>
                                         <div className = 'd-flex flex-column gap-1'>
                                             <span className = 'hen'>Henry Orton</span>
                                             <span className = 'dag'>CEO of Darganox</span>
                                         </div>
                                     </div>
                                  </div>
                            
                            

                              
                                 <div className = 'faq-3 slid'>
                                  <div className = 'd-flex flex-column gap-4'>
                                    <div>
                                      <img src= {decor} alt="" className = 'w-100'/>
                                    </div>
                                    <div>
                                      <h4 className = 'faq-h4-tags'>"Working with Ventsphere give us the confidence and tools to navigate our industry and achieve our goals." </h4>
                                    </div>
                                  </div>
                                    <div className = 'd-flex gap-3'>
                                          <img src= {test2} alt=""/>
                                          <div className = 'd-flex flex-column gap-1'>
                                              <span className = 'hen'>Henry Orton</span>
                                              <span className = 'dag'>CEO of Jobber</span>
                                          </div>
                                      </div>
                                 </div>
                                
                            </Slider>
                              
                          </section>
                      </section>
                  </main>  
        </>
    )
}

export default Group
