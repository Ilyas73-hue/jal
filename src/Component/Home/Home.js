import React, {useState, useEffect} from 'react';
import "./Home.css";
import home_carousel_img_1 from "../../JalAssets/jal_bg.png";
import home_carousel_img_2 from "../../JalAssets/home_carosel_img_2.jpeg";
import home_carousel_img_3 from "../../JalAssets/home_carosel_img_3.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import home_about_slide_1 from "../../JalAssets/jal_img_1.png";
import home_about_slide_2 from "../../JalAssets/jal_img_2.png";
import home_card_logo_1 from "../../JalAssets/card_logo_1.png";
import home_card_logo_2 from "../../JalAssets/card_logo_2.png";
import home_card_logo_3 from "../../JalAssets/card_logo_3.png";
import home_card_logo_4 from "../../JalAssets/card_logo_4.png";
import home_card_logo_5 from "../../JalAssets/card_logo_5.png";
import home_card_logo_6 from "../../JalAssets/card_logo_6.png";
import mission from "../../JalAssets/mission.png";
import vision from "../../JalAssets/vision.png";
import missionvision from "../../JalAssets/mission&vision.png";
import testrimonial_logo from "../../JalAssets/testimonial_logo.png";
import testrimonial_img_1 from "../../JalAssets/testimonial_card_img_1.png";
import testrimonial_img_2 from "../../JalAssets/testimonial_card_img_2.png";
import testrimonial_img_3 from "../../JalAssets/testimonial_card_img_3.png";
import testrimonial_img_4 from "../../JalAssets/testimonial_card_img_4.png";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";
import model_neet_icon from "../../JalAssets/model_neet_icon.png";
import { IoMdDownload } from "react-icons/io";
import model_neet_pdf from "../../JalAssets/neet model 2025.pdf";

function Home() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

    const why_card_data =[{
      id: 1,
      name: "Proven Success Record",
      description: "With years of experience and countless success stories, we’ve earned our reputation as one of the best NEET academies in the country. Our students consistently rank among the top scorers year after year.",
      img: `${home_card_logo_1}`
    }, {
      id: 2,
      name: "Innovative and Effective Methodology",
      description: "Our unique teaching methodology is designed to break down complex concepts, making them easy to understand and retain. We utilize interactive learning, modern technology, and an engaging curriculum that ensures concepts are ingrained deeply.",
      img: `${home_card_logo_2}`
    }, {
      id: 3,
      name: "Expert Faculty",
      description: "Our team consists of experienced, passionate educators who specialize in NEET preparation and are dedicated to each student’s success. They bring in-depth knowledge and real-world insights to every lesson.",
      img: `${home_card_logo_3}`
    }, {
      id: 4,
      name: "Comprehensive StudyMaterials",
      description: "We provide carefully curated, up-to-date study materials and resources that cover the entire NEET syllabus. Our study materials are designed to enhance conceptual clarity and problem-solving skills, ensuring that students are fully prepared for the exam.",
      img: `${home_card_logo_4}`
    }, {
      id: 5,
      name: "Proven Success Record",
      description: "Our unique teaching methodology is designed to break down complex concepts, making them easy to understand and retain. We utilize interactive learning, modern technology, and an engaging curriculum that ensures concepts are ingrained deeply.",
      img: `${home_card_logo_5}`
    }, {
      id: 6,
      name: "Regular Assessments and Mock Tests",
      description: "Our team consists of experienced, passionate educators who specialize in NEET preparation and are dedicated to each student’s success. They bring in-depth knowledge and real-world insights to every lesson.",
      img: `${home_card_logo_6}`
    }];


    const mission_data = [{
      id: 1,
      descripition: "To provide high-quality education that caters to the specific needs of each student, empowering them to excel in NEET and medical-related exams."
    }, {
        id: 2,
      descripition: "To use innovative teaching methods and technology to make learning more interactive and engaging."
    }, {
        id: 3,
      descripition: "To offer comprehensive support through personalized guidance, regular assessments, and timely feedback to help students perform to the best of their abilities."
    }, {
      id: 4,
      descripition: "To inspire and motivate students, building their confidence and helping them overcome any challenges they may face during their preparation journey." 
    }];

    const vision_data = [{
      id: 1,
      descripition: "To be the leading NEET coaching academy, recognized for shaping the brightest medical minds of tomorrow."
    }, {
        id: 2,
      descripition: "To provide an innovative and supportive learning environment that fosters both academic excellence and personal growth."
    }, {
        id: 3,
      descripition: "To empower students with the necessary tools, knowledge, and confidence to excel in NEET and their future medical careers."
    }, {
      id: 4,
      descripition: "To create a community of passionate, well-rounded medical professionals who contribute significantly to healthcare and society." 
    },
    {
      id: 5,
      descripition: "To continuously evolve our teaching methods and resources, keeping pace with educational advancements and NEET exam trends." 
    }, 
    {
      id: 6,
      descripition: "To ensure every student has the opportunity to achieve their highest potential, regardless of background or previous academic standing." 
    }
  ];

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
    <div id="home">
       {/* Section 1 */}

<section id="home-section-1">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
   <div id="carousel-image">
   <div class="carousel-item active">
      <img src={home_carousel_img_1} class="d-block" id="d-block" alt={home_carousel_img_1} />
    </div>
    <div class="carousel-item">
      <img src={home_carousel_img_2} class="d-block"  id="d-block" alt={home_carousel_img_2} />
    </div>
    <div class="carousel-item">
      <img src={home_carousel_img_3} class="d-block"  id="d-block" alt={home_carousel_img_3} />
    </div>
   </div>
   <div id="carousel-content">
     <motion.div
     variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
     initial="hidden"
     whileInView={'show'}
     viewport={{ once: false, amount: 0.7 }}
     id="carousel-content-1">
           <h6 id="carousel-content-1-h6-1">JAL NEET ACADEMY</h6>
           <h6 id="carousel-content-1-h6-2">The Best NEET Academy for Aspiring 
           Medical Students</h6>
           <button id="carousel-content-1-button">Apply Now</button>
     </motion.div>
   </div>
 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <FaArrowLeft id="home-carosel-left-icon" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   
    <FaArrowRight id="home-carosel-right-icon" />
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>

  {/* Section 2 */}

<section id="home-section-2">
    <div className='container' id="home-section-2-div-1"> 
       <motion.div
       variants={!matches && fadeBigIn("right")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
       id="home-section-2-div-1-1">
         <img id="home-section-2-div-1-1-img" src={home_about_slide_1} alt={home_about_slide_1} />
       </motion.div>
       <motion.div
       variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
       id="home-section-2-div-1-2">
        <div id="home-section-2-div-1-2-1">
         <p id="home-section-2-div-1-2-1-p-1">About Us</p>
         <div id="home-section-2-div-1-2-1-line"></div>
        </div>
        <div id="home-section-2-div-1-2-2">
        <p id="home-section-2-div-1-2-2-p-1">The Best NEET Academy for Aspiring Medical Students</p>
        </div>
        <div id="home-section-2-div-1-2-3">
        <p id="home-section-2-div-1-2-3-p-1">At JAL NEET ACADEMY, we are deeply committed to shaping the future of aspiring medical professionals by providing exceptional education, innovative teaching, and personalized guidance. As one of the Best NEET coaching academies in the country, we have a legacy of producing successful medical aspirants who are now on their journey to becoming doctors. Our approach is focused on empowering students with the knowledge and skills they need to excel in the highly competitive NEET exams and fulfill their dreams of a career in medicine.</p>
        </div>
        <div id="home-section-2-div-1-2-4">
        <p id="home-section-2-div-1-2-4-p-1">Our teaching team consists of highly qualified, experienced educators who are experts in their respective fields, ensuring students receive the best possible instruction. These dedicated professionals are not just teachers but mentors who guide students every step of the way, helping them overcome academic challenges and pushing them toward success.</p>
        </div>
        <div id="home-section-2-div-1-2-5">
         <button id="home-section-2-div-1-2-5-button">Read More</button>
        </div>
       </motion.div>
    </div>

   <div className='container' id="home-section-2-div-2"> 
       <motion.div
          variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
       id="home-section-2-div-2-1">
        <div id="home-section-2-div-2-1-1">
        <p id="home-section-2-div-2-1-1-p-1">Jalal Ahmad</p>
        </div>
        <div id="home-section-2-div-2-1-2">
        <p id="home-section-2-div-2-1-2-p-1">Our Founder and CEO</p>
        </div>
        <div id="home-section-2-div-2-1-3">
        <p id="home-section-2-div-2-1-3-p-1">A Mind Power trainer, Hypnotherapist, Happiness coach, Motivational Speaker and NEET coach from Kerala. </p>
        </div>
        <div id="home-section-2-div-2-1-4">
        <p id="home-section-2-div-2-1-4-p-1">JAL (read as 'Jaal') is the abbreviation of his name where he has worked as a teacher. </p>
        </div>
        <div id="home-section-2-div-2-1-5">
        <p id="home-section-2-div-2-1-5-p-1">He has an experience of 24 years as Lecturer in Chemistry in various medical and engineering entrance coaching centres. Developer of interesting learning strategies for Mastering Organic Chemistry. Helped thousands of NEET aspirants to achieve their goal by implementing an innovative methodology (JAL Principles).</p>
        </div>
        <div id="home-section-2-div-2-1-6">
        <p id="home-section-2-div-2-1-6-p-1">Worked in various entrance coaching centres across Kerala (Calicut, Kottakkal, Manjeri, Thrissur, Kottayam, Alappuzha, Kollam etc).</p>
        </div>
        <div id="home-section-2-div-2-1-7">
        <p id="home-section-2-div-2-1-7-p-1">He has an experience of 13 years in Mind Power Training and has become a certified trainer in Mind Power and in Hypnotherapy under venerable veterans in this field. He has conducted hundreds of workshops for students, teachers, family and public in India and Abroad. Also doing family counselling and Students counselling.</p>
        </div>
        <div id="home-section-2-div-2-1-8">
        <p id="home-section-2-div-2-1-8-p-1">Anbodu JAL ❤️</p>
        </div>
        <div id="home-section-2-div-2-1-9">
        <p id="home-section-2-div-2-1-9-p-1">Jalal Ahmad</p>
        </div>
        <div id="home-section-2-div-2-1-10">
        <p id="home-section-2-div-2-1-10-p-1">9605900090</p>
        </div>
        <div id="home-section-2-div-2-1-11">
        <p id="home-section-2-div-2-1-11-p-1">6383375924</p>
        </div>
       </motion.div>
       <motion.div
             variants={!matches && fadeBigIn("left")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
       id="home-section-2-div-2-2">
       <img id="home-section-2-div-2-1-img" src={home_about_slide_2} alt={home_about_slide_2} />
       </motion.div>
   </div>

</section>

{/* model neet academy  */}

<section id="home-section-model">
  <div className='container' id="home-section-model-div-1">
       <p id="home-section-model-div-1-p-1">MODEL NEET 2025</p>
       <div id="home-section-model-div-1-1">
       <img id="home-section-model-div-1-1-icon" src={model_neet_icon} alt={model_neet_icon} />
       <p id="home-section-model-div-1-1-p-1">Provisional answer  key been pulbished</p>
       </div>
       <div id="home-section-model-div-1-2">
       <img id="home-section-model-div-1-2-icon" src={model_neet_icon} alt={model_neet_icon} />
       <p id="home-section-model-div-1-2-p-1">Challenges for the questions will be accepted till 22nd of january 2025.  (6pm).</p>
       </div>
       <div id="home-section-model-div-1-3">
       <img id="home-section-model-div-1-3-icon" src={model_neet_icon} alt={model_neet_icon} />
       <p id="home-section-model-div-1-3-p-1">After analysing the challenges made, the final answer key will be published on 
       24th of january (8:00pm) here in our official website.</p>
       </div>
       <div id="home-section-model-div-1-4">
           <a  href={model_neet_pdf} download="neet model 2025" id="home-section-model-div-1-4-button">Download<IoMdDownload id="home-section-model-div-1-4-button-icon" /></a>
       </div>
  </div>
</section>

{/* Section 3 */}


<section id="home-section-3">
      <div className='container' id="home-section-3-div-1"> 
       <motion.div
       variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
       id="home-section-3-div-1-1">
        <p id="home-section-3-div-1-1-p-1">Why JAL NEET ACADEMY</p>
        <div id="home-section-3-div-1-1-line"></div>
       </motion.div>
       <div id="home-section-3-div-1-2">
        {
          why_card_data.map((item) => (
            <motion.div
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            id="home-section-3-div-1-2-card">
            <div id="home-section-3-div-1-2-card-1">
              <img id="home-section-3-div-1-2-card-1-img" src={item.img} alt={item.img} />
            </div>
            <div id="home-section-3-div-1-2-card-2">
              <p id="home-section-3-div-1-2-card-2-p-1">{item.name}</p>
            </div>
            <div id="home-section-3-div-1-2-card-3">
            <p id="home-section-3-div-1-2-card-3-p-1">{item.description}</p>
            </div>
         </motion.div>
          ))
        }
      
       </div>
      </div>

    

</section>

{/* Section 4 */}

<section id="home-section-4">
   <div className='container' id="home-section-4-div-1"> 
      <motion.div
      variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      id="home-section-4-div-1-1">
        <p id="home-section-4-div-1-1-p-1">Empowering Minds, Changing Lives Shapping Futures</p>
        <p id="home-section-4-div-1-1-p-2">If you're looking for the Best NEET coaching academy that offers top-tier education, consistent results, and unwavering support, JAL NEET ACADEMY is your answer. Join us today and take the first step toward making your medical dreams a reality. </p>
      </motion.div>
      <div id="home-section-4-div-1-2">
        <motion.div
        variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        id="home-section-4-div-1-2-1">
          <h6 id="home-section-4-div-1-2-1-h6-1">
          Enquiry Now 
          </h6>
          <form id="home-section-4-div-1-2-1-form-1">
            <div id="home-section-4-div-1-2-1-form-1-div-1">
               <input id='home-section-4-div-1-2-1-form-1-div-1-input-1' type="text" placeholder='Name' />
               <input id='home-section-4-div-1-2-1-form-1-div-1-input-2' type="number" placeholder='Phone' />
            </div>
            <div id="home-section-4-div-1-2-1-form-1-div-2">
            <input id='home-section-4-div-1-2-1-form-1-div-2-input-1' type="text" placeholder='Email' />
            </div>
            <div id="home-section-4-div-1-2-1-form-1-div-3">
            <input id='home-section-4-div-1-2-1-form-1-div-3-input-1' type="text" placeholder='City' />
            </div>
            <div id="home-section-4-div-1-2-1-form-1-div-4">
              <button id="home-section-4-div-1-2-1-form-1-div-4-button">Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
   </div>
</section>

{/* Section 5 */}

<section id="home-section-5">
<div className='container' id="home-section-5-div-1">
<div id="home-section-5-div-1-1">
  <motion.div
  variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  id="home-section-5-div-1-1-1">
   <div id="home-section-5-div-1-1-1-1">
    <p id="home-section-5-div-1-1-1-1-p-1">Our Mission</p>
    <div id="home-section-5-div-1-1-1-1-line"></div>
    
{
  mission_data.map((item) => (
<div id="home-section-5-div-1-1-1-1-1">
     <div id="home-section-5-div-1-1-1-1-1-1">
      <img id="home-section-5-div-1-1-1-1-1-1-img" src={missionvision} alt={missionvision} />
     </div>
     <div id="home-section-5-div-1-1-1-1-1-2">
      <p id="home-section-5-div-1-1-1-1-1-2-p-1">
      {item.descripition}
      </p>
     </div>
    </div>
  ))
}

   </div>
  </motion.div>

  <motion.div
  variants={!matches && fadeBigIn("left")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  id="home-section-5-div-1-1-2">
    <img  id="home-section-5-div-1-1-2-img" src={mission} alt={mission} />
  </motion.div>
</div>

<div id="home-section-5-div-1-2">
  <motion.div
  variants={!matches && fadeBigIn("right")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  id="home-section-5-div-1-2-1">
  <img id="home-section-5-div-1-2-1-img" src={vision} alt={vision} />
  </motion.div>
  <motion.div
  variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  id="home-section-5-div-1-2-2">
  <div id="home-section-5-div-1-2-2-1">
    <p id="home-section-5-div-1-2-2-1-p-1">Our Vision</p>
    <div id="home-section-5-div-1-2-2-1-line"></div>
    
{
  vision_data.map((item) => (
<div id="home-section-5-div-1-2-2-1-1">
     <div id="home-section-5-div-1-2-2-1-1-1">
      <img id="home-section-5-div-1-2-2-1-1-1-img" src={missionvision} alt={missionvision} />
     </div>
     <div id="home-section-5-div-1-2-2-1-1-2">
      <p id="home-section-5-div-1-2-2-1-1-2-p-1">
      {item.descripition}
      </p>
     </div>
    </div>
  ))
}

   </div>
  </motion.div>
</div>
</div>
</section>


{/* Section 6 */}
<section id="home-section-6">
<div className='container' id="home-section-6-div-1">
  <motion.p
  variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  id="home-section-6-div-1-p-1">
  Your journey to success begins here! Let us help you shape a brighter, healthier future through NEET and beyond.
  </motion.p>
  <motion.button
  variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  id="home-section-6-div-1-button">Admission</motion.button>
</div>
</section>

{/* Section 7 */}

<section id="home-section-7">
   <div className='container' id="home-section-7-div-1">
    <motion.div
    variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
    initial="hidden"
    whileInView={'show'}
    viewport={{ once: false, amount: 0.7 }}
    id="home-section-7-div-1-1">
     <p id="home-section-7-div-1-1-p-1">Testimonials</p>
     <p id="home-section-7-div-1-1-p-2">What Student Says</p>
    </motion.div>
    <div id="home-section-7-div-1-2">
      <div id="home-section-7-div-1-2-1">
{
  testrimonial_data.map((item) => (
<motion.div
variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
initial="hidden"
whileInView={'show'}
viewport={{ once: false, amount: 0.7 }}
id="home-section-7-div-1-2-1-card-1">
              <div id="home-section-7-div-1-2-1-card-1-1">
                 <img id="home-section-7-div-1-2-1-card-1-1-img" src={testrimonial_logo} alt={testrimonial_logo} />
              </div>
              <div id="home-section-7-div-1-2-1-card-1-2">
                 <img id="home-section-7-div-1-2-1-card-1-2-img" src={item.img} alt={item.img} />
              </div>
              <div id="home-section-7-div-1-2-1-card-1-3">
                 <p id="home-section-7-div-1-2-1-card-1-3-p-1">{item.name}</p>
                 <p id="home-section-7-div-1-2-1-card-1-3-p-2">{item.occupation}</p>
              </div>
              <div id="home-section-7-div-1-2-1-card-1-4">
              <FaStar id="home-section-7-div-1-2-1-card-1-4-star" />
              <FaStar id="home-section-7-div-1-2-1-card-1-4-star" />
              <FaStar id="home-section-7-div-1-2-1-card-1-4-star" />
              <FaStar id="home-section-7-div-1-2-1-card-1-4-star" />
              <FaStar id="home-section-7-div-1-2-1-card-1-4-star" />
              </div> 
              <div id="home-section-7-div-1-2-1-card-1-5">
                <p id="home-section-7-div-1-2-1-card-1-5-p-1"> {item.description}</p>
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

export default Home;
