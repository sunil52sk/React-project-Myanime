import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>I am one of the anime lovers who created this website
         to share my recommendations with other anime enthusiasts. 
         My goal is to provide you with a curated list of the best anime series 
         out there, along with information on where to watch them and what makes them great.</p>
      <h2>Developed By,</h2>
      <div className="team-member">
        <img src="https://t4.ftcdn.net/jpg/05/62/02/41/240_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg" alt="Team Member" />
        <h3>Sunilkumar S</h3>
      </div>
    </div>
  );
}

export default About;
