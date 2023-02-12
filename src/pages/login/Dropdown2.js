import React, {useState} from "react";
import {useEffect} from "react";
import '../../App.css';

const Dropdown = ({ placeHolder, options, name}) => {
  const getDisplay = ({placeHolder}) => {
    return placeHolder;
  };
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click",handler);
    };
    const handleInputClick = (e) => {
      e.stopPropagation();
      setShowMenu(!showMenu);
    };
  });
 

  return (
    <div className="dropdown-container">
      <h5 className = "login-label">{name}</h5>
      <div className="dropdown-input">
        <div className="dropdown-menu">
          {options.map((option) =>(
            <div key={option.value} className="dropdown-item">
              {option.label}
        </div>
        ))}
      </div>
      </div>
    </div>
   );
};

export default Dropdown