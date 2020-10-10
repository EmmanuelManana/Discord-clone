import React, { useEffect } from "react";
import Chat from "./components/Chat.js";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import { selectUser } from "./features/userSlice.js";
import { useSelector } from "react-redux";
import Login from "./components/Login.js";
import { auth } from "./firebase";

const App = () => {
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //user is logged
      }else{
        //user is logged oout
      }
    });
  }, []);

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
