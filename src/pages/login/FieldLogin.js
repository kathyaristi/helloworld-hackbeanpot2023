
import React,{ useState }  from "react";
import '../../App.css';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

function FieldLogin(props){
  const change = event => {
    setName(event.target.value)}
    const[emailAdress, setEmailAdress] = useState("");
    const[name, setName] = useState("");
    const[Major, setMajor] = useState("");
    return(
      
      <div className = "Login">
      <h5 className = "login-label">{props.name}</h5>
      <input 
      type = "text" 
      className ="login-input-style" 
      onChange={change} />
      </div>
    )
}

export default FieldLogin