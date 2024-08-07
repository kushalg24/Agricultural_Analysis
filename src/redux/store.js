import { combineReducers, combineSlices, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk'; // Import 'thunk' from 'redux-thunk'
import inputslice from './inputslice';
import loginslice from './loginslice';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

const rootReducer = combineReducers({
  inputslice: inputslice,
  loginslice:loginslice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['inputslice'],
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
