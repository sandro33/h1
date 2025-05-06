import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ProfileCard name="Sandro" age={16}>
        <button className="follow-btn">Follow</button>
      </ProfileCard>

      <ProfileCard name="Alex" age={20}>
        <button className="unfollow-btn">Unfollow</button>
        <button className="message-btn">Message</button>
      </ProfileCard>

      <ProfileCard name="Taylor" age={25}>
        <button className="view-profile-btn">View Profile</button>
      </ProfileCard>
    </div>
  );
}

export default App;