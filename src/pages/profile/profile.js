import React from "react";
import ProfileClass from "./ProfileClass.js";

import profilepic from "./images/logo192.png";

const Profile = () => {
  return (
    <div className="ProfileClass">
      <h1>My Profile</h1>
              <ProfileClass name='Jimmy' major='Data Sci and Math' grad='25' 
              courses='Database Design, Database Design, Database Design' coop='' languages='Python, React' looking='Study Buddy' 
              pic={profilepic} pic2={profilepic} pic3={profilepic} 
              message='Live Laugh Love <3'
              favlang='Dr Racket' mode='Dark Mode' interest='Full stack' snack='pocky'/>
            </div>
  );
};
  
export default Profile;