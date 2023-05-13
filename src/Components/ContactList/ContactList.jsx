import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Phone, Person } from "@mui/icons-material";

import classes from "./ContactList.module.css";

import { contactActions } from "../../store/ContactsReducer";

const ContactList = () => {
  const contacts = useSelector((state) => state.contact.contacts);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(contactActions.deleteContact(id));
  };

  return contacts.map((contact) => {
    return (
      <li key={contact.id}>
        <div className={classes.contact}>
          <Person
            style={{
              color: "white",
            }}
          />{" "}
          {contact.name}
          <Phone
            style={{
              color: "white",
            }}
          />
          {contact.number}
          <IconButton
            aria-label="delete"
            size="medium"
            onClick={deleteHandler.bind(this, contact.id)}
          >
            <DeleteIcon
              style={{
                color: "red",
              }}
            />
          </IconButton>
        </div>
      </li>
    );
  });
};

export default ContactList;
