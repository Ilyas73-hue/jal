import React, {useState, useEffect} from 'react';
import "./Registration.css";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";


function Registration() {

      const [matches, setMatches] = useState(
          window.matchMedia("(max-width: 769px)").matches
        )
      
        useEffect(() => {
          window
          .matchMedia("(max-width: 769px)")
          .addEventListener('change', e => setMatches( e.matches ));
        }, []);

  return (
    <div id="registration">

        {/* section 1 */}
         <section id="registration-section-1">
        <div className='container' id="registration-section-1-div-1">
        <motion.p 
        variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
        id="registration-section-1-div-1-p-1">JAL NEET ACADEMY</motion.p>
          <motion.p
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7 }}
          id="registration-section-1-div-1-p-2">Registration</motion.p>
        </div>
      </section>

     {/* section 2 */}

      <section id="registration-section-2"> 
           <div className='container' id="registration-section-2-div-1">
                 <h6 id="registration-section-2-div-1-h6-2">Registration Form</h6>
           </div>

        <div className='container' id="registration-section-2-div-2">
            <form id="registration-section-2-div-2-form">
                <div id="registration-section-2-div-2-form-div">
                <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Name</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="text"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Date-Of-Birth</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="date"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Gender</p>
                        <select id="registration-section-2-div-2-form-div-1-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Email Address</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="email"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Phone Number</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="number"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Alternate Phone Number</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="number"  />
                   </div>
                </div>
                <div id="registration-section-2-div-2-form-div-2">
                <p id="registration-section-2-div-2-form-div-1-p-1">Address</p>
                <textarea id="registration-section-2-div-2-form-div-2-input" type="message"  ></textarea>
                </div>
                <div id="registration-section-2-div-2-form-div-3">
                <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Class/Grade</p>
                        <select id="registration-section-2-div-2-form-div-1-select">
                            <option>11</option>
                            <option>12</option>
                            <option>Repeaters</option>
                        </select>
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Group</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="text"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">School/College Name</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="text"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Category</p>
                        <select id="registration-section-2-div-2-form-div-1-select">
                            <option>OC</option>
                            <option>BC</option>
                            <option>MBC</option>
                            <option>SC</option>
                            <option>Others</option>
                        </select>
                   </div>
                </div>
                <div id="registration-section-2-div-2-form-div-4">
                <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Parent/Guardian Name</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="text"  />
                   </div>
                   <div id="registration-section-2-div-2-form-div-1">
                        <p id="registration-section-2-div-2-form-div-1-p-1">Contact Number</p>
                        <input id="registration-section-2-div-2-form-div-1-input" type="number"  />
                   </div>
                </div>
                <div id="registration-section-2-div-2-form-div-5">
                      <input type="checkbox" id="registration-section-2-div-2-form-div-5-checkbox" />
                      <p id="registration-section-2-div-2-form-div-5-p-1">I confirm that the information provided is accurate and agree to follow the guidelines of Jal NEET Academy for the mock test.</p>
                </div>
                <div id="registration-section-2-div-2-form-div-6">
                      <button id="registration-section-2-div-2-form-div-6-submit" type="submit">Submit</button>
                </div>
            </form>
        </div>

      </section>


    </div>
  )
}

export default Registration;
