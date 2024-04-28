import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
       <div className="paddings innerWidth flexCenter c-container">
              <div className="flexColStart c-left">
                     <span className='orangeText'>Our Contacts</span>
                     <span className='primaryText'>Easy to contact us</span>
                     <span>We always ready to help by providing the best service for you.We believe a good place to live can make ouy lives better</span>
                     <div className="flexColStart contactModes">
                            {/* firstrow */}

                            <div className="flexStart row">
                                   <div className="flexCenter mode">
                                          <div className="flexStart">
                                                 <div className="flexCenter icon">
                                                        <MdCall size={25}/>
                                                 </div>
                                                 <div className="flexColStart detail">
                                                        <span className='color-name'>Call</span>
                                                        <span className='secondaryText'>021 123 145 14</span>
                                                 </div>
                                          </div>
                                          <div className='flexCenter button'>Call Now</div>
                                   
                                   </div>

                                   {/* chat */}
                                   <div className="flexCenter mode">
                                          <div className="flexStart">
                                                 <div className="flexCenter icon">
                                                        <BsFillChatDotsFill size={25}/>
                                                 </div>
                                                 <div className="flexColStart detail">
                                                        <span className='color-name'>Chat Now</span>
                                                        <span className='secondaryText'>021 123 145 14</span>
                                                 </div>
                                          </div>
                                          <div className='flexCenter button'>Chat Now</div>
                                   
                                   </div>
                            </div>
                            <div className="flexStart row">
                                   {/* video call  */}
                                   <div className="flexCenter mode">
                                          <div className="flexStart">
                                                 <div className="flexCenter icon">
                                                        <BsFillChatDotsFill size={25}/>
                                                 </div>
                                                 <div className="flexColStart detail">
                                                        <span className='color-name'>Video call Now</span>
                                                        <span className='secondaryText'>021 123 145 14</span>
                                                 </div>
                                          </div>
                                          <div className='flexCenter button'>Video call Now</div>
                                   
                                   </div>
                                   {/* message now */}


                                   <div className="flexCenter mode">
                                          <div className="flexStart">
                                                 <div className="flexCenter icon">
                                                        <HiChatBubbleBottomCenter size={25}/>
                                                 </div>
                                                 <div className="flexColStart detail">
                                                        <span className='color-name'>Message Now</span>
                                                        <span className='secondaryText'>021 123 145 14</span>
                                                 </div>
                                          </div>
                                          <div className='flexCenter button'>Message Now</div>
                                   
                                   </div>


                            </div>
                     </div>
              </div>


              <div className="c-right">
                     <div className="image-container-1">
                     <img src="./contact.jpg" alt="" />
                     </div>
              </div>
       </div>
    </section>
  )
}

export default Contact