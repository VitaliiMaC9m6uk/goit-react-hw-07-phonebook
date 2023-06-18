import {useState } from "react";
import { Form } from "./ContactForm.styled";
const ContactForm = ({submit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isValidLogin = (value) => {
    const pattern = /^[a-zA-Zа-яА-ЯЁё ]+$/;      
    return pattern.test(value);
  }
  const isValidNumber = value => {
    const pattern =
      /[0-9]{12}/;    
    return pattern.test(value);
  };

  const hendleChange = ({ target: { value, name } }) => {     
    switch (name) {
      case 'name':  
        if (value === '') {
         setName(value); 
        }
        if (!isValidLogin(value)) {          

          return;
        }
        setName(value);
        break;
      case 'number':
        if (value === '') {
          setNumber(value);
        }
        if (!isValidNumber(value)) {          
          setNumber(value);
          return;
        }       
        break;
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    submit({ name, number });
    setName('');
    setNumber('');
  }
  
  return (
    <Form onSubmit={hendleSubmit}>
      <h2>Name</h2>
      <input
        onChange={hendleChange}
        type="text"
        name="name"       
        value={name}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
      <h2>Number</h2>
      <input
        type="tel"
        value={number}
        onChange={hendleChange}
        name="number"       
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <button type="submit">Add contact</button>
    </Form>
  );
}

export default ContactForm;