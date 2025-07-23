import React, { useState, useContext } from 'react';
import Usercontext from '../context/Usercontext';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(Usercontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  // Determine if the login button should be disabled
  const isDisabled = !username.trim() || !password.trim();

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username..."
        />

        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password..."
        />

        <button
          className="login-button"
          type="submit"
          disabled={isDisabled}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
