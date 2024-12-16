import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      
       {/* Section 1 */}
       
       <section id="contact-section-1">
        <div className='container' id="contact-section-1-div-1">
          <p id="contact-section-1-div-1-p-1">JAL NEET Academy</p>
          <p id="contact-section-1-div-1-p-2">Contact Us</p>
        </div>
      </section>

      {/* Section 2 */}

      <section id="contact-section-2">
        <div className='container' id="contact-section-2-div-1">
          <div id="contact-section-2-div-1-1">
            <h6 id="contact-section-2-div-1-1-h6-1">Contact</h6>
          </div>
          <div id="contact-section-2-div-1-2">
            <div id="contact-section-2-div-1-2-1">
            <iframe id="contact-section-2-div-1-2-1-g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8086393894537!2d77.34501747478132!3d9.081190590982242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b068536c442f879%3A0x6487bc05065ff30d!2sJAL%20NEET%20ACADEMY!5e0!3m2!1sen!2sin!4v1734281870786!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="contact-section-2-div-1-2-2">
            <form id="contact-section-2-div-1-2-2-form">
                 <h6 id="contact-section-2-div-1-2-2-form-h6-1">Get In Touch</h6>
                 <div id="contact-section-2-div-1-2-2-form-div-1">
                  <input id="contact-section-2-div-1-2-2-form-div-1-input" type="text" placeholder='Name' />
                 </div>
                 <div id="contact-section-2-div-1-2-2-form-div-1">
                  <input id="contact-section-2-div-1-2-2-form-div-1-input" type="email" placeholder='Email' />
                 </div>
                 <div id="contact-section-2-div-1-2-2-form-div-1">
                  <input id="contact-section-2-div-1-2-2-form-div-1-input" type="number" placeholder='phone number' />
                 </div>
                 <div id="contact-section-2-div-1-2-2-form-div-1">
                  <textarea id="contact-section-2-div-1-2-2-form-div-1-input-1" type="text" placeholder='Message' />
                 </div>
                 <div id="contact-section-2-div-1-2-2-form-div-1">
                     <button id="contact-section-2-div-1-2-2-form-div-1-button">Submit</button>
                 </div>
            </form>
            </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;
