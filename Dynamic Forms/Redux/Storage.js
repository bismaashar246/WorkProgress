import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './Slice/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['username', 'gender', 'areasOfInterest'],
  blacklist: ['age', 'password'] 
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export { store, persistor };
