import '../../App.css';
import { useState } from 'react';

import profilepic from "./images/logo192.png";
import codingdog from "./images/codingdog1.jpg";
import studying1 from "./images/studying1.jpg";

const person1 = {
  "id": 3,
  "name": "Lightning",
  "major": "Cybersecurity",
  "grad": 26,
  "courses": [
    "Foundations of Cybersecurity",
    "Cyberlaw"
  ],
  "co-op": [
    "Pentagon",
    "FBI"
  ],
  "languages": [
    "C++",
    "Java"
  ],
  "looking": "Mentor",
  "pic1": "PIC3.1",
  "pic2": "PIC3.2",
  "pic3": "PIC3.3",
  "profile": "./cars.svg",
  "bio": "Kerchoo",
  "favlang": "C++",
  "mode": "Light",
  "interest": "Cybersecurity",
  "snack": "Gasoline",
  "match": 0,
  "chat": []
}

const person2 = {
  "id": 1,
  "name": "Beact",
  "major": "Computer Science and Math",
  "grad": 23,
  "courses": [
    "Fundies II",
    "OOD"
  ],
  "co-op": [
    "Microsoft",
    "Google"
  ],
  "languages": [
    "Python",
    "Java",
    "C#"
  ],
  "looking": "Mentee",
  "pic1": "PIC2.1",
  "pic2": "PIC2.2",
  "pic3": "PIC2.3",
  "profile": {codingdog},
  "bio": "Bello Borld",
  "favlang": "Java",
  "mode": "Dark",
  "interest": "Full Stack",
  "snack": "Computer Chips",
  "match": 1,
  "chat": [
    {
      "id": 0,
      "sender": "Beact",
      "text": "Hey AAA"
    },
    {
      "id": 1,
      "sender": "Beact",
      "text": "Did you lose a timestamp?"
    },
    {
      "id": 2,
      "sender": "Beact",
      "text": "Cuz I'm pretty sure it's DateTime.now();"
    },
    {
      "id": 3,
      "sender": "User",
      "text": "OMG <3"
    }
  ]
}

const person3 = {
  "id": 2,
  "name": "Neutron",
  "major": "Cybersecurity",
  "grad": 25,
  "courses": [
    "Cyberlaw"
  ],
  "co-op": [
    "Gamestop",
    "Google"
  ],
  "languages": [
    "Java",
    "C++"
  ],
  "looking": "Mentor",
  "pic1": "PIC3.1",
  "pic2": "PIC3.2",
  "pic3": "PIC3.3",
  "profile": {profilepic},
  "bio": "OOOOOOUUUAUUHIAHIA",
  "favlang": "C++",
  "mode": "Dark",
  "interest": "Cybersecurity",
  "snack": "Pebbles",
  "match": 1,
  "chat": [
    {
      "id": 0,
      "sender": "Neutron",
      "text": "Hey"
    },
    {
      "id": 1,
      "sender": "Neutron",
      "text": "Hey dum dum"
    },
    {
      "id": 2,
      "sender": "Neutron",
      "text": "Where the heck is my gum gum"
    }
  ]
}

const person5 = {
  "id": 4,
  "name": "Bruno Mars",
  "major": "Data Science and Math",
  "grad": 25,
  "courses": [
    "Database Design",
    "Algo",
    "Fundies II"
  ],
  "co-ops": [],
  "languages": [
    "Python",
    "React"
  ],
  "looking": "Study Buddy",
  "pic1": "PIC5.1",
  "pic2": "PIC5.2",
  "pic3": "PIC5.3",
  "profile": {studying1},
  "bio": "Live Laugh Love <3",
  "favlang": "Dr. Racket",
  "mode": "Dark",
  "interest": "Full Stack",
  "snack": "pocky",
  "match": 1,
  "chat": [
    {
      "id": 0,
      "sender": "Bruno Mars",
      "text": "What's up gamer"
    },
    {
      "id": 1,
      "sender": "Bruno Mars",
      "text": "Yessir Yessir"
    }
  ]  
}

function Chatlog(props) {
  const [list, setList] = useState(props.chats)
  const [text, setText] = useState('')

  function handleText(event) {
    setText(event.target.value)
  }

  function handleAdd() {
    if (text !== "") {
      const newChat = {
        'id': list.length,
        'sender': 'User',
        'text': text
      }


      const newList = list.concat(newChat);
      setList(newList);
      setText('')
    }
  }
  

  return (
    <div className='chatBox'>
      <div>
        <ul style={{listStyle: 'none'}}>
        {list.map((item) => (
          <li key={item.id}>{item.sender}: {item.text}</li>
        ))}
        </ul>
      </div>
      <div className='typeMessage'>
        <input type='text' value={text} onChange={handleText} />
        <button type='button' onClick={handleAdd}>Message</button>
      </div>
    </div>
  )
}

function Match(props) {

  return (
  <>
    <div className='matchBox'>
      <div className='profileBox'>
        <h3 className='matchName'>{props.name}</h3>
        <img src={props.pic} alt='profilePic' className='profilePicture'/>
      </div>

      <Chatlog chats={props.chatlog}/>


    </div>
  </>
  )
}

export default function MatchList() {
  const [people, setPeople] = useState([
    {
      'id': 0,
      'inname': person5.name,
      'inpic': studying1,
      'inchat': person5.chat
    },
    {
      'id': 1,
      'inname': person2.name,
      'inpic': codingdog,
      'inchat': person2.chat
    },
    {
      'id': 2,
      'inname': person3.name,
      'inpic': profilepic,
      'inchat': person3.chat
    }
  ])
  const deleteByValue = value => {
    setPeople(oldPeople => {
      return oldPeople.filter(people => people.id !== value)
    })
  }

  return (
    <>
    <h1>my matches</h1>
      {people.map(function(person, i){
        return (<>
          <Match name={person.inname} pic={person.inpic} chatlog={person.inchat} unique_id={person.id} />
          <button style={{'float': 'center', 'background': 'red', 'opacity': '0.5', 'border': '0.5px', 'color': 'white'}} onClick={() => deleteByValue(person.id)}>Block {person.inname}</button>
        </>)
      })}
    </>
  );

}
