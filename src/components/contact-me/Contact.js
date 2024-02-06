import "./Contact.css"
import React, { useState } from 'react';
export default function Contact() {
  
     const [message,setMessage] =useState("Drop Us a Message");
     const [color,setColor] =useState("blue");
     const handleMessage = ()=>
     {
        setColor("#90EE90");
        setMessage("Thanks for Contacting");
       
     }

  return (
    <>
       
       <div className="contact-me-header"id="contact">
       <h4>&lt; CONTACT-ME&#47;&gt;</h4>
       </div>

       <div class="  shadow-lg p-3 mb-5  container contact-form " >
       
       
        
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="GET"action="/" >
                <h3 style={{color}}>{message}</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *"  />
                        </div>
                       
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" ></textarea>
                        </div>
                         <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" onClick={handleMessage} />
                        </div>
                    </div>
                </div>
            </form>
            </div>

    </>
  )
}
