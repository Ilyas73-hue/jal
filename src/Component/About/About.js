import React, {useState, useEffect} from 'react';
import "./About.css";
import home_about_slide from "../../JalAssets/home_about_slide_img_1.png";
import about_card_logo_1 from "../../JalAssets/about_card_logo_1.png";
import about_card_logo_2 from "../../JalAssets/about_card_logo_2.png";
import about_card_logo_3 from "../../JalAssets/about_card_logo_3.png";
import about_card_logo_4 from "../../JalAssets/about_card_logo_4.png";
import about_card_logo_5 from "../../JalAssets/about_card_logo_5.png";
import about_card_logo_6 from "../../JalAssets/about_card_logo_6.png";
import about_card_logo_7 from "../../JalAssets/about_card_logo_7.png";
import about_card_logo_8 from "../../JalAssets/about_card_logo_8.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";



function About() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const card_data =[{
    id: 1, 
    name: "Mission-Driven Approach",
    img: `${about_card_logo_1}`,
    description: "At JAL NEET ACADEMY, we are dedicated to helping aspiring medical professionals achieve their dreams through quality education and innovative teaching methods."
  }, {
    id: 2, 
    name: "Recognized Excellence",
    img: `${about_card_logo_2}`,
    description: "We are proud to be recognized as one of the Best NEET coaching academies, with a history of guiding students to success in the highly competitive NEET exams."
  }, {
    id: 3, 
    name: "Expert Educators",
    img: `${about_card_logo_3}`,
    description: "Our team consists of experienced and qualified educators committed to student success, providing personalized coaching tailored to each student's needs."
  }, {
    id: 4, 
    name: "Engaging Teaching Methods",
    img: `${about_card_logo_4}`,
    description: "We employ a blend of traditional teaching techniques and modern, interactive methods, focusing on concept clarity, critical thinking, and problem-solving skills."
  }, {
    id: 5, 
    name: "Comprehensive Study Materials",
    img: `${about_card_logo_5}`,
    description: "Students receive in-depth study materials designed by experts, covering all essential topics aligned with the latest NEET exam patterns."
  }, {
    id: 6, 
    name: "Regular Assessments ",
    img: `${about_card_logo_6}`,
    description: "We conduct regular mock tests and performance reviews to provide valuable insights into student progress and adjust our teaching approach accordingly." 
  }, {
    id: 7, 
    name: "Supportive Learning Environment",
    img: `${about_card_logo_7}`,
    description: "We strive to create a motivating and inspiring atmosphere, encouraging students to work hard and reach their full potential." 
  }, {
    id: 8, 
    name: "Holistic Development",
    img: `${about_card_logo_8}`,
    description: "Our goal is to prepare students not just for exams but also to shape them into confident, skilled individuals ready for a successful career in medicine." 
  }]

  return (
    <div id="about">
     {/* Section 1 */}

      <section id="about-section-1">
        <div
        className='container' id="about-section-1-div-1">
          <motion.p
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          id="about-section-1-div-1-p-2">About Us</motion.p>
        </div>
      </section>

      {/* Section 2 */}

      <section id="about-section-2">
    <div className='container' id="about-section-2-div-1"> 
       <div
       id="about-section-2-div-1-1">
         <motion.img
            variants={!matches && fadeBigIn("right")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
         id="about-section-2-div-1-1-img" src={home_about_slide} alt={home_about_slide} />
       </div>
       <motion.div
              variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
       id="about-section-2-div-1-2">
        <motion id="about-section-2-div-1-2-1">
         <p id="about-section-2-div-1-2-1-p-1">About Us</p>
         <div id="about-section-2-div-1-2-1-line"></div>
        </motion>
        <div
        id="about-section-2-div-1-2-2">
        <p id="about-section-2-div-1-2-2-p-1">The Best NEET Academy for Aspiring Medical Students</p>
        </div>
        <div
             
        id="about-section-2-div-1-2-3">
        <p id="about-section-2-div-1-2-3-p-1">At JAL NEET ACADEMY, we are deeply committed to shaping the future of aspiring medical professionals by providing exceptional education, innovative teaching, and personalized guidance. As one of the Best NEET coaching academies in the country, we have a legacy of producing successful medical aspirants who are now on their journey to becoming doctors. Our approach is focused on empowering students with the knowledge and skills they need to excel in the highly competitive NEET exams and fulfill their dreams of a career in medicine.</p>
        </div>
        <div
        id="about-section-2-div-1-2-4">
        <p id="about-section-2-div-1-2-4-p-1">Our teaching team consists of highly qualified, experienced educators who are experts in their respective fields, ensuring students receive the best possible instruction. These dedicated professionals are not just teachers but mentors who guide students every step of the way, helping them overcome academic challenges and pushing them toward success.</p>
        </div>
     
       </motion.div>
    </div>
</section>

   {/* Section 3 */}

   <section id="about-section-3">
   <motion.div
   variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
   className='container' id="about-section-3-div-1">
     <p id="about-section-3-div-1-p-1">Join JAL NEET ACADEMY today, and let’s work together to turn your aspirations into reality. Your journey to becoming a medical professional starts here!</p>
   </motion.div>
   </section>

   {/* Section 4 */}

   <section id="about-section-4">
     <div className='container' id="about-section-4-div-1">
      {
        card_data.map((item) => (
          <motion.div
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
          id="about-section-4-div-1-card-1">
          <div id="about-section-4-div-1-card-1-div-1">
           <img id="about-section-4-div-1-card-1-div-1-img" src={item.img} alt={item.img} />
          </div>
          <div id="about-section-4-div-1-card-1-div-2">
           <p id="about-section-4-div-1-card-1-div-2-p-1">{item.name}</p>
          </div>
          <div id="about-section-4-div-1-card-1-div-3">
           <p id="about-section-4-div-1-card-1-div-3-p-1">{item.description}</p>
          </div>
        </motion.div>
        ))
      }
 
     </div>
   </section>

    </div>
  )
}

export default About
