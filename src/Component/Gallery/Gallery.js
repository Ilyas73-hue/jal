import React, {useState, useEffect} from 'react';
import "./Gallery.css";
import gallery_img_1 from "../../JalAssets/gallery_img_1.jpg";
import gallery_img_2 from "../../JalAssets/gallery_img_2.jpg";
import gallery_img_5 from "../../JalAssets/gallery_img_5.jpg";
import gallery_img_6 from "../../JalAssets/gallery_img_6.jpg";
import gallery_img_8 from "../../JalAssets/gallery_img_8.jpg";
import gallery_img_9 from "../../JalAssets/gallery_img_9.jpg";
import gallery_img_10 from "../../JalAssets/gallery_img_10.jpg";
import gallery_img_11 from "../../JalAssets/gallery_img_11.jpg";
import gallery_img_12 from "../../JalAssets/gallery_img_12.jpg";
import gallery_img_13 from "../../JalAssets/gallery_img_13.jpg";
import gallery_img_15 from "../../JalAssets/gallery_img_15.jpg";
import gallery_img_17 from "../../JalAssets/gallery_img_17.jpg";
import gallery_img_18 from "../../JalAssets/gallery_img_18.jpg";
import gallery_img_19 from "../../JalAssets/gallery_img_19.jpg";
import gallery_img_20 from "../../JalAssets/gallery_img_20.jpg";
import gallery_img_21 from "../../JalAssets/gallery_img_21.jpg";
import testrimonial_img_1 from "../../JalAssets/testimonial_card_img_1.png";
import testrimonial_img_2 from "../../JalAssets/testimonial_card_img_2.png";
import testrimonial_img_3 from "../../JalAssets/testimonial_card_img_3.png";
import testrimonial_img_4 from "../../JalAssets/testimonial_card_img_4.png";
import { FaStar } from "react-icons/fa6";
import testrimonial_logo from "../../JalAssets/testimonial_logo.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";



function Gallery() {

    const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 769px)").matches
    )
  
    useEffect(() => {
      window
      .matchMedia("(max-width: 769px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const testrimonial_data = [{
        id: 1, 
        name: "John",
        occupation: "Student",
        img: `${testrimonial_img_1}`,
       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . "
      }, {
        id: 2, 
        name: "Sara",
        occupation: "Student",
        img: `${testrimonial_img_2}`,
       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . "
      }, {
        id: 3, 
        name: "Anderson",
        occupation: "Student",
        img: `${testrimonial_img_3}`,
       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . "
      }, {
        id: 4, 
        name: "Suresh",
        occupation: "Student",
        img: `${testrimonial_img_4}`,
       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . "
      }];
    
  return (
    <div id="gallery">
      
         {/* Section 1 */}
       
         <section id="gallery-section-1">
        <div className='container' id="gallery-section-1-div-1">
          <motion.p
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                              initial="hidden"
                              whileInView={'show'}
                              viewport={{ once: false, amount: 0.7 }}
          id="gallery-section-1-div-1-p-2">Gallery</motion.p>
        </div>
      </section>

      {/* Section 2 */}

      <section id="gallery-section-2">
          <div className='container' id="gallery-section-2-div-1">
          <div id="gallery-section-2-div-1-1">
          <button id="gallery-section-2-div-1-1-button-1">INFRASTRUCTURE</button>
          <button id="gallery-section-2-div-1-1-button-2">ACHIEVERS</button>
          </div>
          <div id="gallery-section-2-div-1-2">
           <motion.img
           variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                               initial="hidden"
                               whileInView={'show'}
                               viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_2} alt={gallery_img_2} />
           <motion.img
            variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_9} alt={gallery_img_9} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_10} alt={gallery_img_10} />
           <motion.img
            variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_5} alt={gallery_img_5} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_6} alt={gallery_img_6} />
           <motion.img
            variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_11} alt={gallery_img_11} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_8} alt={gallery_img_8} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_12} alt={gallery_img_12} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_13} alt={gallery_img_13} />
             <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_17} alt={gallery_img_17} />
           <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_15} alt={gallery_img_15} />
                      <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_18} alt={gallery_img_18} />
             <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_19} alt={gallery_img_19} />
            <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_20} alt={gallery_img_20} />
            <motion.img
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="gallery-section-2-div-1-2-img" src={gallery_img_21} alt={gallery_img_21} />
          </div>
          </div>
      </section>

      {/* Section 3 */}




<section id="why_choose_us-section-5">
   <div className='container' id="why_choose_us-section-5-div-1">
    <div id="why_choose_us-section-5-div-1-1">
     <motion.p
      variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
     id="why_choose_us-section-5-div-1-1-p-1">Testimonials</motion.p>
     <motion.p
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
     id="why_choose_us-section-5-div-1-1-p-2">What Student Says</motion.p>
    </div>
    <div id="why_choose_us-section-5-div-1-2">
      <div id="why_choose_us-section-5-div-1-2-1">
{
  testrimonial_data.map((item) => (
<motion.div
 variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
 initial="hidden"
 whileInView={'show'}
 viewport={{ once: false, amount: 0.7 }}
id="why_choose_us-section-5-div-1-2-1-card-1">
              <div id="why_choose_us-section-5-div-1-2-1-card-1-1">
                 <img id="why_choose_us-section-5-div-1-2-1-card-1-1-img" src={testrimonial_logo} alt={testrimonial_logo} />
              </div>
              <div id="why_choose_us-section-5-div-1-2-1-card-1-2">
                 <img id="why_choose_us-section-5-div-1-2-1-card-1-2-img" src={item.img} alt={item.img} />
              </div>
              <div id="why_choose_us-section-5-div-1-2-1-card-1-3">
                 <p id="why_choose_us-section-5-div-1-2-1-card-1-3-p-1">{item.name}</p>
                 <p id="why_choose_us-section-5-div-1-2-1-card-1-3-p-2">{item.occupation}</p>
              </div>
              <div id="why_choose_us-section-5-div-1-2-1-card-1-4">
              <FaStar id="why_choose_us-section-5-div-1-2-1-card-1-4-star" />
              <FaStar id="why_choose_us-section-5-div-1-2-1-card-1-4-star" />
              <FaStar id="why_choose_us-section-5-div-1-2-1-card-1-4-star" />
              <FaStar id="why_choose_us-section-5-div-1-2-1-card-1-4-star" />
              <FaStar id="why_choose_us-section-5-div-1-2-1-card-1-4-star" />
              </div> 
              <div id="why_choose_us-section-5-div-1-2-1-card-1-5">
                <p id="why_choose_us-section-5-div-1-2-1-card-1-5-p-1"> {item.description}</p>
              </div>
         </motion.div>
  ))
}
         
      </div>
    </div>
   </div>
</section>

    </div>
  )
}

export default Gallery
