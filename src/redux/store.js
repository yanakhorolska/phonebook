import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice.js';
import { contactsApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
