import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./UserSlice";
import roleReducer from "./RoleSlice";
import authReducer from "./AuthSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Persist only auth slice
};

const rootReducer = combineReducers({
  users: userReducer,
  roles: roleReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
