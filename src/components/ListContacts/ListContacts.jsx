import { useDispatch, useSelector } from "react-redux";
import { Button, Contact, ContactsList } from "./ListContacts.styled";
import { contactsSelector, filteredContactsSelector } from "store/contacts/selectors";
import { deleteContact } from 'store/contacts/contactsThunks';


const ListContacts = () => {
  const filteredContacts = useSelector(filteredContactsSelector);
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();  
  
  const deleteClick = event => {
    const { id } = event.target;    
    dispatch(deleteContact(id));
  } 
  return (
    <ContactsList>
      {contacts?.length > 0 && filteredContacts.length === 0 && (
        <h3>Sorry, no contacts were found for your search.</h3>
      )}
      {filteredContacts?.map(contact => (
        <Contact key={contact.id}>
          {contact.name} : {contact.phone}
          <Button id={contact.id} onClick={deleteClick}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
}
export default ListContacts;