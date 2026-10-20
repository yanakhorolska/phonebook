import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice.js';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './authSlice.js';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Local demo mode: save contacts in this browser. The original API thunks and
// authentication reducers are retained for a future backend integration.
const loadLocalContacts = () => {
  try {
    const saved = JSON.parse(localStorage.getItem('phonebook-contacts') || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  preloadedState: {
    contacts: { items: loadLocalContacts(), isLoading: false, error: null },
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

store.subscribe(() => {
  try {
    localStorage.setItem('phonebook-contacts', JSON.stringify(store.getState().contacts.items));
  } catch {
    // The app remains usable even if browser storage is unavailable.
  }
});
