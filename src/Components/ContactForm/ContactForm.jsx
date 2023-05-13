import { useDispatch } from "react-redux";
import { contactActions } from "../../store/ContactsReducer";
import { useState } from "react";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: "",
    number: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name: formState.name,
      number: formState.number,
      id: nanoid(),
    };

    dispatch(contactActions.addContact(contact));
    reset();
  };

  const reset = () => {
    setFormState({
      name: "",
      number: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formState.name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formState.number}
          onChange={onChangeHandler}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
