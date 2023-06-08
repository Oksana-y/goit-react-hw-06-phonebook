const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};

const PhoneBookSlice = createSlice({
  name: 'PhoneBook',
  initialState,
  reducers: {
    filterAllContacts: (state, { payload }) => {
      state.filter = payload;
    },
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contacts => contacts.id !== payload
      );
    },
  },
});

export const { filterAllContacts, addContacts, deleteContacts } =
  PhoneBookSlice.actions;
export const PhoneBookReducer = PhoneBookSlice.reducer;
