import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

// comments just to change
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/profile" activeStyle>
            <img class="padded" height="30" width="30"src= "https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png" ></img>
          </NavLink>
          <NavLink to="/swipes" activeStyle>
            <img class="padded" src= "https://policies.tinder.com/static/ad5fe8e55f591b89e6ccd5fce88a5179/906b5/tinder_white_flame_black_outline.png" width="30" height="30"></img>
          </NavLink>
          <NavLink to="/matches" activeStyle>
            <img class="padded" src= "https://www.pngkit.com/png/full/469-4697336_person-icon-png-white.png" width="30" height="30"></img>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;