import ContactForm from "./ContactForm/ContactForm";
import ListContacts from "./ListContacts/ListContacts";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'store/contacts/selectors';
import { addContact } from 'store/contacts/contactsSlice';

export const App = () => {

  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  
  const hendleSubmit = e => {
    if (contacts) {
      const filterContacts = contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().indexOf(e.name.toLocaleLowerCase()) >
          -1
      );
      if (filterContacts.length > 0) {
        const sameNames = filterContacts.map(contact => contact.name);
        return alert(`${sameNames} is already in contacts.`);
      }
    }    
    dispatch(addContact(e));        
  };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        submit={hendleSubmit}
      />
      <h2>Contacts</h2>
      <Filter
        // filter={hendleSaveFind}
      />
      <ListContacts
        // list={hendleFilter()}
        // deleteName={deleteContact}
      />
    </div>
  );
}
