import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",

  initialState: {
      channelId: null,
      channelName: null,
  },

  reducers: {
    // reducer functions
    setChannelInfo: (state, action) => {
      //payload
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    
  },
});

export const {setChannelInfo} = appSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user.value)`
export const selectChannelID = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
