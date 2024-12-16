import React from 'react';
import "./Gallery.css";
import gallery_img_1 from "../../JalAssets/gallery_img_1.png";
import testrimonial_img_1 from "../../JalAssets/testimonial_card_img_1.png";
import testrimonial_img_2 from "../../JalAssets/testimonial_card_img_2.png";
import testrimonial_img_3 from "../../JalAssets/testimonial_card_img_3.png";
import testrimonial_img_4 from "../../JalAssets/testimonial_card_img_4.png";
import { FaStar } from "react-icons/fa6";
import testrimonial_logo from "../../JalAssets/testimonial_logo.png";

function Gallery() {

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
          <p id="gallery-section-1-div-1-p-1">JAL NEET Academy</p>
          <p id="gallery-section-1-div-1-p-2">Gallery</p>
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
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
           <img id="gallery-section-2-div-1-2-img" src={gallery_img_1} alt={gallery_img_1} />
          </div>
          </div>
      </section>

      {/* Section 3 */}




<section id="why_choose_us-section-5">
   <div className='container' id="why_choose_us-section-5-div-1">
    <div id="why_choose_us-section-5-div-1-1">
     <p id="why_choose_us-section-5-div-1-1-p-1">Testimonials</p>
     <p id="why_choose_us-section-5-div-1-1-p-2">What Student Says</p>
    </div>
    <div id="why_choose_us-section-5-div-1-2">
      <div id="why_choose_us-section-5-div-1-2-1">
{
  testrimonial_data.map((item) => (
<div id="why_choose_us-section-5-div-1-2-1-card-1">
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
         </div>
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
