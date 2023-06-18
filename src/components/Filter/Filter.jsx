import { useDispatch } from "react-redux";
import { changeFilter } from "store/contacts/filterSlice";
// import { changeFilter } from 'store/contacts/contactsSlice';


const Filter = () => {  
  const dispatch = useDispatch();
  const hendleSaveFilter = (e) => {    
    dispatch(changeFilter(e.target.value));
  }
    return (
      <>
        <label>Find contacts by name</label>
        <input onChange={hendleSaveFilter}></input>
      </>
    );
}
export default Filter;