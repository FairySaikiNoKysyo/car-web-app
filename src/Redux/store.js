import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { favoriteReducer } from "./Favorite/favoriteSlice";

const persistConfig = {
  key: 'favorite',
  storage,
}

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer)
export const store = configureStore({
    reducer: {
      cars: carsReducer,
      filter:filterReducer,
      favorite:persistedFavoriteReducer,
    }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  export const persistor = persistStore(store);