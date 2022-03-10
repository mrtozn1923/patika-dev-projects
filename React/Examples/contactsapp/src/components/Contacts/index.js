import {useState,useEffect} from 'react';
import './style.css';
import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts,setContacts]=useState([{fullname:"mert",phone_number:"12365"},{fullname:"mehmet",phone_number:"25896"},{fullname:"erdem",phone_number:"58968"}]);

  useEffect(()=>{
  },[contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts