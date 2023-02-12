import '../../App.css';
import { useState } from 'react';

import profilepic from "./images/logo192.png";

const chatlog1 = [
  {
    'id': 0,
    'sender': 'Jimmy',
    'text': "What's up gamer"
  },
  {
    'id': 1,
    'sender': 'User',
    'text': "Yessir Yessir"
  },
]
const chatlog2 = [
  {
    'id': 0,
    'sender': 'Beact',
    'text': "Hey Handsome"
  },
  {
    'id': 1,
    'sender': 'Beact',
    'text': "Did u lose a timestamp?"
  },
  {
    'id': 2,
    'sender': 'Beact',
    'text': "Cuz i'm pretty sure it's DateTime.now();"
  },
  {
    'id': 3,
    'sender': 'User',
    'text': "Omg 😍😍"
  },
]
const chatlog3 = [
  {
    'id': 0,
    'sender': 'Moai',
    'text': "Hey"
  },
  {
    'id': 1,
    'sender': 'Moai',
    'text': "Hey dum dum"
  },
  {
    'id': 2,
    'sender': 'Moai',
    'text': "Where the fuck is my gum gum"
  },
]

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
      'inname': 'Jimmy',
      'inpic': profilepic,
      'inchat': chatlog1
    },
    {
      'id': 1,
      'inname': 'Beact',
      'inpic': profilepic,
      'inchat': chatlog2
    },
    {
      'id': 2,
      'inname': 'Moai',
      'inpic': profilepic,
      'inchat': chatlog3
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
