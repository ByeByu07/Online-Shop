import { createSlice } from "@reduxjs/toolkit";

const notifSlice  = createSlice({
  name:"notif",
  initialState:{notif:null},
  reducers:{
    showNotif(state,action){
      state.notif={
        title:action.payload.title,
        desc:action.payload.desc,
        icon:action.payload.icon
      }
    }
  }
})


export default notifSlice;
export const notifAction = notifSlice.actions;