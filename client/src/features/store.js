import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import cartReducer from "./slices/cartSlice/cartSlice.js";
import authReducer from "./slices/authSlice/authSlice.js";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

// Redux-persist configuration
const persistConfig = {
  key: "Codit",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
        console.log(err, "Error from store for secretKey");
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools:
    import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
