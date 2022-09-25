import { configureStore } from "@reduxjs/toolkit";
import notifSlice from "./notifSlice";

const store = configureStore({
  reducer:{
    notif : notifSlice.reducer,
  }
})

export default store;