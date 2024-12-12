import React from 'react';
import "./Navbar.css";
import Marquee from "react-fast-marquee";

function Navbar() {
  return (
    <div id="navbar">
      <div  id="navbar-1">
      <Marquee
       direction='right'
       speed={60}
      >
         <p id="navbar-1-p-1">Welcome to Jal Neet Academy – The Best NEET Academy for Aspiring Medical Students</p>
         </Marquee>
      </div>
     
      <nav class="navbar navbar-expand-lg" id="navbar-2">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Admissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Why Choose us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Contact</a>
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
