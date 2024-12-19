import React, {useState, useEffect} from 'react';
import "./Admission.css";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";


function Admission() {


    const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 769px)").matches
    )
  
    useEffect(() => {
      window
      .matchMedia("(max-width: 769px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);
  

  return (
    <div id="admission">
      
        {/* Section 1 */}
        
        <section id="admission-section-1">
        <div className='container' id="admission-section-1-div-1">
        <motion.p 
        variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
        id="admission-section-1-div-1-p-1">JAL NEET ACADEMY</motion.p>
          <motion.p
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7 }}
          id="admission-section-1-div-1-p-2">Admission</motion.p>
        </div>
      </section>

     {/* Section 2 */}
     <section id="admission-section-2">
     <div className='container' id="admission-section-2-div-1">
      <div id='admission-section-2-div-1-1'>
        <motion.p
          variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        id='admission-section-2-div-1-1-p-1'>Registration Form</motion.p>
      </div>
      <div id="admission-section-2-div-1-2">
      <form id="admission-section-2-div-1-2-form">
       <div id="admission-section-2-div-1-2-form-1">
        <div id="admission-section-2-div-1-2-form-1-1">
        <p id="admission-section-2-div-1-2-form-1-1-p-1">Name</p>
        <input type="text" id='admission-section-2-div-1-2-form-1-1-input-1' />
        </div>
        <div id="admission-section-2-div-1-2-form-1-2">
        <p id="admission-section-2-div-1-2-form-1-2-p-1">Email</p>
        <input type="email" id='admission-section-2-div-1-2-form-1-2-input-1' />
        </div>
       </div> 

       <div id="admission-section-2-div-1-2-form-1">
        <div id="admission-section-2-div-1-2-form-1-1">
        <p id="admission-section-2-div-1-2-form-1-1-p-1">Phone number</p>
        <input type="number" id='admission-section-2-div-1-2-form-1-1-input-1' />
        </div>
        <div id="admission-section-2-div-1-2-form-1-2">
        <p id="admission-section-2-div-1-2-form-1-2-p-1">Date of Birth</p>
        <input type="date" id='admission-section-2-div-1-2-form-1-2-input-1'  />
        </div>
       </div>

       <div id="admission-section-2-div-1-2-form-1">
<div id="admission-section-2-div-1-2-form-1-1">
<p id="admission-section-2-div-1-2-form-1-1-p-1">Community</p>
<input type="text" id='admission-section-2-div-1-2-form-1-1-input-1' />
</div>
<div id="admission-section-2-div-1-2-form-1-2">
<p id="admission-section-2-div-1-2-form-1-2-p-1">Gender</p>
<input type="text" id='admission-section-2-div-1-2-form-1-2-input-1'  />
</div>
</div>


<div id="admission-section-2-div-1-2-form-1">
<div id="admission-section-2-div-1-2-form-1-1">
<p id="admission-section-2-div-1-2-form-1-1-p-1">Father’s name</p>
<input type="text" id='admission-section-2-div-1-2-form-1-1-input-1' />
</div>
<div id="admission-section-2-div-1-2-form-1-2">
<p id="admission-section-2-div-1-2-form-1-2-p-1">Mobile number</p>
<input type="number" id='admission-section-2-div-1-2-form-1-2-input-1'  />
</div>
</div>

<div id="admission-section-2-div-1-2-form-1">
<div id="admission-section-2-div-1-2-form-1-1">
<p id="admission-section-2-div-1-2-form-1-1-p-1">Course</p>
<input type="text" id='admission-section-2-div-1-2-form-1-1-input-1' />
</div>
<div id="admission-section-2-div-1-2-form-1-2">
<p id="admission-section-2-div-1-2-form-1-2-p-1">City</p>
<input type="text" id='admission-section-2-div-1-2-form-1-2-input-1'  />
</div>
</div>


<div id="admission-section-2-div-1-2-form-1">
<div id="admission-section-2-div-1-2-form-1-1">
<p id="admission-section-2-div-1-2-form-1-1-p-1">State</p>
<input type="text" id='admission-section-2-div-1-2-form-1-1-input-1' />
</div>
<div id="admission-section-2-div-1-2-form-1-2">
<p id="admission-section-2-div-1-2-form-1-2-p-1">pin code</p>
<input type="number" id='admission-section-2-div-1-2-form-1-2-input-1'  />
</div>
</div>



<div id="admission-section-2-div-1-2-form-2">
     <div id="admission-section-2-div-1-2-form-2-1">
       <div id="admission-section-2-div-1-2-form-2-1-1">
        <p id="admission-section-2-div-1-2-form-2-1-1-p-1">Academic Performance</p>
        <input id="admission-section-2-div-1-2-form-2-1-1-input-1" type="text" placeholder='Year' />
       </div>
       <div id="admission-section-2-div-1-2-form-2-1-2">
       <p id="admission-section-2-div-1-2-form-2-1-2-p-1">School name</p>
       <input id="admission-section-2-div-1-2-form-2-1-2-input-1" type="text" />
        </div>
     </div>
     <div id="admission-section-2-div-1-2-form-2-2">
     <div id="admission-section-2-div-1-2-form-2-1-1">
        <p id="admission-section-2-div-1-2-form-2-1-1-p-1">Board</p>
        <input id="admission-section-2-div-1-2-form-2-1-1-input-1" type="text"  />
       </div>
       <div id="admission-section-2-div-1-2-form-2-1-2">
       <p id="admission-section-2-div-1-2-form-2-1-2-p-1">Total</p>
       <input id="admission-section-2-div-1-2-form-2-1-2-input-1" type="text" />
        </div>
     </div>
</div>

<div id="admission-section-2-div-1-2-form-2-3"> 
<div id="admission-section-2-div-1-2-form-2-3-1">
        <p id="admission-section-2-div-1-2-form-2-3-1-p-1">Address</p>
        <textarea id="admission-section-2-div-1-2-form-2-3-1-input-1" type="text" />
       </div>
</div>

<div id='admission-section-2-div-1-2-form-2-4'>
   <div id='admission-section-2-div-1-2-form-2-4-1' >
    <button id='admission-section-2-div-1-2-form-2-4-1-button' type="submit">Submit</button>
   </div>
</div>


      </form>
      </div>
     </div>
     </section>

    </div>
  )
}

export default Admission;
