import React from "react";
import Carousel from "./Carousel.js"
import CarouselItem from "./Carousel.js"
import ProfileClass from "../profile/ProfileClass.js";

import profilepic from "./images/logo192.png";
import codingcat1 from "./images/codingcat1.jpg";
import codingcat2 from "./images/codingcat2.jpg";
import codingcat3 from "./images/codingcat3.jpg";
  
const Swipes = () => {
  return (
    <div className="Carousel">
      <h1>hello world</h1>
      <Carousel>
        <CarouselItem>
          <div className="Profile">
            <ProfileClass name='Jimmy' major='Data Sci and Math' grad='25' 
            courses='Database Design, Database Design, Database Design' coop='' languages='Python, React' looking='Study Buddy' 
            pic={codingcat1} pic2={codingcat2} pic3={codingcat3} 
            message='Live Laugh Love <3'
            favlang='Dr Racket' mode='Dark Mode' interest='Full stack' snack='pocky'/>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="Profile">
            <ProfileClass name='Beact' major='CS and Business' grad='23' 
            courses='Software Dev, Algorithms & Data' coop='' languages='Python, Java, C++' looking='Mentor' 
            pic={profilepic} pic2={profilepic} pic3={profilepic} 
            message='Bello Borld'
            favlang='Bython' mode='Light Mode' interest='Backend' snack='boreos'/>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="Profile">
            <ProfileClass name='Moai' major='CS and Design' grad='26' 
            courses='AI, Computer Vision' coop='Wood Mackenzie' languages='Html, CSS, JavaScript, React, Node.js' looking='Mentee' 
            pic={profilepic} pic2={profilepic} pic3={profilepic} 
            message='Where the fuck is my gum gum, dum dum'
            favlang='JavaScript' mode='Dark Mode' interest='WebDev' snack='pickles'/>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
};
  
export default Swipes;