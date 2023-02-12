import React from "react";
import "../../App.css";

function ProfileClass(props) {
    return (
        <>
          <div className='matchbox'>
          <div className='Pictures'>
            <table>
                <tr>
                    <td className="image-header"><img src={props.pic} alt='profilePic'/></td>
                    <td className="image-header"><img src={props.pic2} alt='codeSnap'/></td>
                    <td className="image-header"><img src={props.pic3} alt='linkedIn'/></td>
                </tr>
            </table>
            </div>
            <div className='essentials'>
                <p className='matchName'><b>{props.name}</b>, '{props.grad}</p>
                <p className='matchMajor'>🎓 {props.major} Major</p>
                <p className='matchLooking'>Looking for a <b>{props.looking}</b></p>
                <hr/>
            </div>
            
            <div className='details'>
                <p classname="matchBio"><b>Prompt of the day: </b>Go-to 3 AM snack is {props.snack}</p>
                <p className='matchBio'>{props.message}</p>
                <table>
                    <tr>
                        <td><p className='matchCourses'> <b>Courses taken: </b> {props.courses}</p></td>
                        <td><p className='matchCoop'><b>Companies worked at: </b>{props.coop}</p></td>
                        <td><p className='matchLanguages'><b>Programming Languages: </b>{props.languages}</p></td>
                    </tr>
                    <tr>
                        <td><p className='matchCourses'> <b>Favorite Language: </b> {props.favlang}</p></td>
                        <td><p className='matchCoop'><b>{props.mode}</b></p></td>
                        <td><p className='matchLanguages'><b>Area of Interest: </b>{props.interest}</p></td>
                    </tr>
                </table>
            </div>
          </div>
        </>
    )
}

export default ProfileClass