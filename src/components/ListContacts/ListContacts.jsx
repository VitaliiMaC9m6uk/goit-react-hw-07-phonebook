import { useDispatch, useSelector } from "react-redux";
import { Button, Contact, ContactsList } from "./ListContacts.styled";
import { filterSelector } from "store/contacts/selectors";
import { deleteContact } from "store/contacts/contactsSlice";

const ListContacts = () => {
  const filter = useSelector(filterSelector);

  const contacts = useSelector(state => {
    return state.contacts.contacts.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  });

  const dispatch = useDispatch();
  
  const deleteClick = event => {
    const { id } = event.target;    
    dispatch(deleteContact(id));
  } 
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          {contact.name} : {contact.number}
          <Button id={contact.id} onClick={deleteClick}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
}
export default ListContacts;