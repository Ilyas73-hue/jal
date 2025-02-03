import React, {useState, useEffect} from 'react';
import "./Contact.css";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";

function Contact() {

      const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 769px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 769px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

  return (
    <div id="contact">
      
       {/* Section 1 */}
       
       <section id="contact-section-1">
        <div className='container' id="contact-section-1-div-1">
          <motion.p
          variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                              initial="hidden"
                              whileInView={'show'}
                              viewport={{ once: false, amount: 0.7 }}
          id="contact-section-1-div-1-p-1">JAL NEET ACADEMY</motion.p>
          <motion.p
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                              initial="hidden"
                              whileInView={'show'}
                              viewport={{ once: false, amount: 0.7 }}
          id="contact-section-1-div-1-p-2">Contact Us</motion.p>
        </div>
      </section>

      {/* Section 2 */}

      <section id="contact-section-2">
        <div className='container' id="contact-section-2-div-1">
          <motion.div
          variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                              initial="hidden"
                              whileInView={'show'}
                              viewport={{ once: false, amount: 0.7 }}
          id="contact-section-2-div-1-1">
            <h6 id="contact-section-2-div-1-1-h6-1">Contact</h6>
          </motion.div>
          <div id="contact-section-2-div-1-2">
            <motion.div
            variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
            id="contact-section-2-div-1-2-1">
            <iframe id="contact-section-2-div-1-2-1-g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.914309686449!2d77.72529617500808!3d8.699687594056869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041361c4018091%3A0x16842f5b25edd9d1!2sJAL%20NEET%20ACADEMY!5e0!3m2!1sen!2sin!4v1738562826758!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
            <motion.div
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
            id="contact-section-2-div-1-2-2">
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
            </motion.div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;
