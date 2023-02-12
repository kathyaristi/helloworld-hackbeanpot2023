import React from "react";
import Carousel from "./Carousel.js"
import { CarouselItem } from "./Carousel.js"
import ProfileClass from "../profile/ProfileClass.js";

import profilepic from "./images/logo192.png";
import codingcat1 from "./images/codingcat1.jpg";
import codingcat2 from "./images/codingcat2.jpg";
import codingcat3 from "./images/codingcat3.jpg";
import codingdog1 from "./images/codingdog1.jpg";
import jimmy2 from "./images/jimmy2.png";
import jimmy3 from "./images/jimmy3.jpg";
import moai1 from "./images/moai1.png";
import moai2 from "./images/moai2.jpg";
import moai3 from "./images/moai3.jpg";
  
const Swipes = () => {
  return (
    <div className="Carousel">
      <h1>hello world</h1>
      <Carousel>
        <CarouselItem>
          <div className="Profile">
            <ProfileClass name='Lightning' major='Cybersecurity' grad='25' 
            courses='Foundations of Cybersecurity, Cyberlaw' coop='Pentagon, FBI' languages='C++, Java' looking='Mentor' 
            pic={codingcat1} pic2={codingcat2} pic3={codingcat3} 
            message='i steal ur data!!'
            favlang='C++' mode='Light Mode' interest='Cybersecurity' snack='peanuts'/>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="Profile">
            <ProfileClass name='Beact' major='CS and Business' grad='23' 
            courses='Software Dev, Algorithms & Data' coop='' languages='Python, Java, C++' looking='Study Buddy' 
            pic={codingdog1} pic2={jimmy2} pic3={jimmy3} 
            message='Bello Borld'
            favlang='Bython' mode='Dark Mode' interest='Backend' snack='boreos'/>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="Profile">
            <ProfileClass name='Moai' major='CS and Design' grad='26' 
            courses='AI, Computer Vision' coop='Wood Mackenzie' languages='Html, CSS, JavaScript, React, Node.js' looking='Mentee' 
            pic={moai1} pic2={moai2} pic3={moai3} 
            message='Where the fuck is my gum gum, dum dum'
            favlang='JavaScript' mode='Dark Mode' interest='WebDev' snack='pickles'/>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
};
  
export default Swipes;