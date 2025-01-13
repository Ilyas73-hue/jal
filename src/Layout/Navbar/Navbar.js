import React from 'react';
import "./Navbar.css";
import Marquee from "react-fast-marquee";
import logo from "../../JalAssets/jal_logo.png";

function Navbar() {
  return (
    <div id="navbar">
      <div  id="navbar-1">
      <Marquee
       direction='right'
       speed={60}
      >
         <p id="navbar-1-p-1">Welcome to JAL NEET ACADEMY – The Best NEET Academy for Aspiring Medical Students</p>
         </Marquee>
      </div>
     
      <nav class="navbar navbar-expand-lg" id="navbar-2">
  <div class="container">
    <a class="navbar-brand" href="#"><img id="navbar-brand-logo" src={logo} alt={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/about_us">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/admission">Admissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/registration">Registration</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/why_choose_us">Why Choose us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <div className='d-flex' id="d-flex">
          <button id="d-flex-contact">Enquiry now</button>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
