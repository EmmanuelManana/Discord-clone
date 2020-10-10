import React from 'react';
import Chat from './components/Chat.js';
import Sidebar from './components/Sidebar.js';
import './App.css'

function App() {
  return (
  
  
    <div className="app">
      
      {/* Sidebar Component */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
