import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import css from "./Form.module.css";
const Form = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.form}>
        <ContactForm />
        <ul>
          <ContactList />
        </ul>
      </div>
      <Filter />
    </div>
  );
};

export default Form;
