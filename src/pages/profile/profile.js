import React from "react";
import ProfileClass from "./ProfileClass.js";

import profilepic from "./images/logo192.jpg";
import profilepic2 from "./images/codesnip.png";
import profilepic3 from "./images/programmer.jfif";

const Profile = () => {
  return (
    <div className="ProfileClass">
      <h1>my profile</h1>
              <ProfileClass name='Jimmy' major='Data Sci and Math' grad='25' 
              courses='Database Design, Algorithms & Data, Intro to Data Science' coop='' languages='Python, SQL, React' looking='Study Buddy' 
              pic={profilepic} pic2={profilepic2} pic3={profilepic3} 
              message='Live Laugh Love <3'
              favlang='Dr Racket' mode='Dark Mode' interest='Full stack' snack='pocky'/>
            </div>
  );
};
  
export default Profile;