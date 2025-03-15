import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      if (
        state.items.some(
          (contact) => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in the contact list.`);
        return;
      }
      state.items.push({ id: nanoid(), name, number });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
