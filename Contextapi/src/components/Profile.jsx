import React, { useContext } from 'react';
import Usercontext from '../context/Usercontext';
import './Profile.css'; // Add this for styling

function Profile() {
  const { user } = useContext(Usercontext);

  if (!user || !user.username.trim()) {
    return <div className="profile-message">Please login to continue.
    
    
    </div>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-greeting">Welcome, <span>{user.username}</span> 👋</h2>
      <button className="logout-btn" onClick={() => setUser(null)}>Logout</button>

    </div>
  );
}

export default Profile;
