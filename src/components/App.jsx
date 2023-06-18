import ContactForm from "./ContactForm/ContactForm";
import ListContacts from "./ListContacts/ListContacts";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'store/contacts/selectors';
import { addContact, fetchContacts } from 'store/contacts/contactsThunks';
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Notiflix from 'notiflix';

export const App = () => {

  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const hendleSubmit = e => {
    if (contacts) {
      const filterContacts = contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().indexOf(e.name.toLocaleLowerCase()) >
          -1
      );
      if (filterContacts.length > 0) {
        const sameNames = filterContacts.map(contact => contact.name);
        return Notiflix.Notify.failure(`${sameNames} is already in contacts.`);      
      }
    }  
    const newContact = {
      name: e.name,
      phone: e.number,
      id:nanoid(),
    }
    dispatch(addContact(newContact));        
  };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        submit={hendleSubmit}
      />
      <h2>Contacts</h2>
      <Filter/>
      <ListContacts/>
    </div>
  );
}
