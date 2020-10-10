import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice'

// create a redux store.
export default configureStore({
  reducer: {
    user: userReducer,
    app : appReducer,
  },
});
