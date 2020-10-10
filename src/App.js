import React, { useEffect } from "react";
import Chat from "./components/Chat.js";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login.js";
import { auth } from "./firebase";

// slices
import { login, logout, selectUser } from "./features/userSlice.js";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        console.table(authUser)
        //user is logged

        // push into redux-store
        // dispatch an action into user slice and pass the payload,
        // pass object of any type
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }else{
        //user is logged out
        dispatch(logout())
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
