import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./ProductRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserRedux from "./UserRedux";

const persistConfig = {
  key: "root",
  version: 2,
  storage,
};

const rootReducer = combineReducers({
  products: ProductReducer,
  user: UserRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
