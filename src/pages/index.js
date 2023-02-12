import React,{ useState }  from "react";
import FieldLogin from "./login/FieldLogin";
import Dropdown from "./login/Dropdown2";
import "./login/login.css";

function Home(props){
    
    const[emailAddress, setEmailAdress] = useState("Email address");
    const[Major, setMajor] = useState("Major");

    const[name, setName] = useState("Name");
    const change = event => {
        setName(event.target.value)}

    const options =[
        {value: "Python", label: "Python"},
        {value: "Java", label: "Java"},
        {value: "C", label: "C"},
        {value: "C++", label: "C++"}
    ];

    const optionsMent =[
        {value: "Mentor",label: "Mentor"},
    {value: "Mentee",label: "Mentee"},
{value: "Study Buddy", label: "Study Buddy"}]
    return(

        <div className = "login-container">
            <div className = "login-app-wrapper">
        <div className = "Login-Welcome">
            <h1 className = "login-header">Tell us who you are!</h1>
                <div className = "Login">

                <FieldLogin name = "Name:"/>
                <FieldLogin name = "Email Address:"/>
                <FieldLogin name = "Major:"/>
                
                <FieldLogin name = "Past Companies"/>


                <FieldLogin name = "Coursework:"/>
                <FieldLogin name = "Dark Mode vs Light Mode"/>
                <div>
                <Dropdown className = "Drop2" placeHolder="What are you looking for?" options = {optionsMent} name = {"What are you looking for?"}/>
                </div>
                <div>
                <Dropdown className = "Drop" placeHolder="What is your favorite programming language?" options = {options} name = {"What is your favorite programming language"}/>
                </div>
                <FieldLogin name = "Areas of Interest:"/>
                <FieldLogin name = "Describe yourself in 20 words:"/>
                
                <div>
                <button 
                className="login-sign" 
                >Upload Picture</button>
                <div>
                <a href= "./profile">
                <button 
                className="login-sign" 
                >Sign up!</button>
                </a>
                </div>
           </div>
        </div>
    </div>
    </div>
    </div>
       
    )
}

export default Home;
