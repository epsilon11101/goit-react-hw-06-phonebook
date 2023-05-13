import { createSlice } from "@reduxjs/toolkit";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactInitialState = {
  contacts: [...defaultContacts],
  unfilteredContacts: [...defaultContacts],
};

const contactSlice = createSlice({
  name: "contact",
  initialState: contactInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      state.unfilteredContacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      const updatedContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updatedContacts,
        unfilteredContacts: updatedContacts,
      };
    },
    filterContact: (state, action) => {
      if (!action.payload.toLowerCase().trim()) {
        return {
          ...state,
          contacts: state.unfilteredContacts,
        };
      }
      return {
        ...state,
        contacts: state.unfilteredContacts.filter((contact) =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
