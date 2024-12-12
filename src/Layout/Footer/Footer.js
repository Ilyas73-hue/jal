import React from 'react';
import "./Footer.css";
import footer_logo from "../../JalAssets/jal_neet_academy_logo.png";
import footer_icon_logo_1 from "../../JalAssets/footer_icon_logo_1.png";
import footer_icon_logo_2 from "../../JalAssets/footer_icon_logo_2.png";
import footer_icon_logo_3 from "../../JalAssets/footer_icon_logo_3.png";
import footer_icon_logo_4 from "../../JalAssets/footer_icon_logo_4.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div id="footer">
      <div  id="footer-1">
          <div className='container' id="footer-1-section-1">
            <div id="footer-1-section-1-div-1">
              <div id="footer-1-section-1-div-1-1">
                <img id="footer-1-section-1-div-1-1-img" src={footer_logo} alt={footer_logo} />
              </div>
              <div id="footer-1-section-1-div-1-2">
               <p id="footer-1-section-1-div-1-2-p-1">
               At Jal Neet Academy, we are committed to providing the highest quality education to help students achieve their dream of becoming medical professionals. Recognized as one of the *Best NEET coaching academies*, we have successfully guided thousands of aspiring doctors toward their goals. Our innovative teaching methods, experienced faculty, and personalized approach make us the ideal choice for NEET preparation.
               </p>
              </div>
              <div id="footer-1-section-1-div-1-3">
                <img id="footer-1-section-1-div-1-3-img-1" src={footer_icon_logo_1} alt={footer_icon_logo_1} />
                <img id="footer-1-section-1-div-1-3-img-2" src={footer_icon_logo_2} alt={footer_icon_logo_2} />
                <img id="footer-1-section-1-div-1-3-img-3" src={footer_icon_logo_3} alt={footer_icon_logo_3} />
                <img id="footer-1-section-1-div-1-3-img-4" src={footer_icon_logo_4} alt={footer_icon_logo_4} />
              </div>
            </div>
            <div id="footer-1-section-1-div-2">
               <div id="footer-1-section-1-div-2-1">
                <p id="footer-1-section-1-div-2-1-p-1">Links</p>
               </div> 
               <div id="footer-1-section-1-div-2-2">
                <ul id="footer-1-section-1-div-2-2-ul">
                    <li id="footer-1-section-1-div-2-2-li">
                      <a id="footer-1-section-1-div-2-2-li-a" href="/">Home</a>
                    </li>
                    <li id="footer-1-section-1-div-2-2-li">
                      <a id="footer-1-section-1-div-2-2-li-a" href="/">About Us</a>
                    </li>
                    <li id="footer-1-section-1-div-2-2-li">
                      <a id="footer-1-section-1-div-2-2-li-a" href="/">Admission</a>
                    </li>
                    <li id="footer-1-section-1-div-2-2-li">
                      <a id="footer-1-section-1-div-2-2-li-a" href="/">Why Choose Us</a>
                    </li>
                     <li id="footer-1-section-1-div-2-2-li">
                      <a id="footer-1-section-1-div-2-2-li-a" href="/">Gallery</a>
                    </li>
                    <li id="footer-1-section-1-div-2-2-li">
                      <a id="footer-1-section-1-div-2-2-li-a" href="/">Contact</a>
                    </li>
                </ul>
               </div> 
            </div>
            <div id="footer-1-section-1-div-3">
                <div id="footer-1-section-1-div-3-1">
                <p id="footer-1-section-1-div-3-1-p-1">Contact</p>
                </div>
                <div id="footer-1-section-1-div-3-2">
                 <div id="footer-1-section-1-div-3-2-1">
                  <div id="footer-1-section-1-div-3-2-1-1">
                  <FaPhoneAlt id="footer-1-section-1-div-3-2-1-1-icon" />
                  </div>
                  <div id="footer-1-section-1-div-3-2-1-2">
                    <p id="footer-1-section-1-div-3-2-1-2-p-1">+91 00000 00000</p>
                    </div>
                 </div>
                 <div id="footer-1-section-1-div-3-2-2">
                 <div id="footer-1-section-1-div-3-2-2-1">
                  <MdEmail id="footer-1-section-1-div-3-2-2-1-icon" />
                  </div>
                  <div id="footer-1-section-1-div-3-2-2-2">
                    <p id="footer-1-section-1-div-3-2-2-2-p-1">Send Us Email</p>
                    </div>
                </div>
                 <div id="footer-1-section-1-div-3-2-3">
                 <div id="footer-1-section-1-div-3-2-3-1">
                  <IoLocationSharp id="footer-1-section-1-div-3-2-3-1-icon" />
                  </div>
                  <div id="footer-1-section-1-div-3-2-3-2">
                    <p id="footer-1-section-1-div-3-2-3-2-p-1">Get Direction</p>
                    </div>
                </div>
                </div>
            </div>
            <div id="footer-1-section-1-div-4">
            <div id="footer-1-section-1-div-4-1">
                <p id="footer-1-section-1-div-4-1-p-1">Newsletter</p>
                </div>
                <div id="footer-1-section-1-div-4-2">
                   <p id="footer-1-section-1-div-4-2-p-1">Your email-address:</p>
                   <input id="footer-1-section-1-div-4-2-input" type="text" placeholder='Enter your email' />
                   <button id="footer-1-section-1-div-4-2-button">Subscribe</button>
                </div>
            </div>
          </div>
          <div id="footer-1-section-2">

          </div>
          <div className='container' id="footer-1-section-3">
          <div id="footer-1-section-3-1">
            <p id="footer-1-section-3-1-p-1">Copyright © 2024 <span id="footer-1-section-3-1-p-1-span">JAL NEET Academy</span>. All Rights Reserved.</p>
          </div>
          <div id="footer-1-section-3-2">
            <p id="footer-1-section-3-2-p-1">Developed by : <a id="footer-1-section-3-2-p-1-a" href="">Intwhizz</a></p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
