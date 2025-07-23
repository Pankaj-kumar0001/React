import React, { useContext } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';
import Usercontext from './context/Usercontext';
import './App.css'

function AppContent() {
  const { user } = useContext(Usercontext);

  return (
    <>
      {user && user.username.trim()
        ? <Profile />
        : <Login />}
    </>
  );
}

function App() {
  return (
    <UserContextProvider>
      <h1>All about useContext</h1>
      <AppContent />
    </UserContextProvider>
  );
}

export default App;
