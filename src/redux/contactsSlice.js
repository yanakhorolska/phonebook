import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Material'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Material'],
//     }),
//     addContact: builder.mutation({
//       query: values => ({
//         url: '/contacts',
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['Material'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Material'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;

// import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const contacts = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,

//   [addContact.fulfilled](state, action) {
//     state.items.push(action.payload);
//   },
//   [deleteContact.fulfilled](state, action) {
//     const index = state.items.findIndex(
//       contact => contact.id === action.payload.id
//     );
//     state.items.splice(index, 1);
//   },
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.pending]: () => null,
//   [fetchContacts.fulfilled]: () => null,
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [addContact.pending]: () => null,
//   [addContact.fulfilled]: () => null,
//   [addContact.rejected]: (_, action) => action.payload,
//   [deleteContact.pending]: () => null,
//   [deleteContact.fulfilled]: () => null,
//   [deleteContact.rejected]: (_, action) => action.payload,
// });

// export default combineReducers({ contacts, isLoading, error });
