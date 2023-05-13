import { useState } from "react";
import { useDispatch } from "react-redux";

import { contactActions } from "../../store/ContactsReducer";
const Filter = () => {
  const [filterData, setFilterData] = useState("");

  const dispatch = useDispatch();

  const onFilterHandler = (e) => {
    setFilterData(e.target.value);
    dispatch(contactActions.filterContact(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="filter may contain only letters, apostrophe, dash and spaces"
        value={filterData}
        onChange={onFilterHandler}
        style={{ marginTop: "2rem" }}
      />
    </div>
  );
};

export default Filter;
