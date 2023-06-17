import { useDispatch } from "react-redux";
import { filterContact } from "store/contacts/contactsSlice";


const Filter = () => {  
  const dispatch = useDispatch();
  const hendleSaveFilter = (e) => {    
    dispatch(filterContact(e.target.value));
  }
    return (
      <>
        <label>Find contacts by name</label>
        <input onChange={hendleSaveFilter}></input>
      </>
    );
}
export default Filter;