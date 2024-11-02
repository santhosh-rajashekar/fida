// src/components/Profile.js
import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <main className="profile-main">
        <h1>My Profile</h1>
        <p>Your Allianz personal profile. Edit your info, change your password here.</p>

        <div className="profile-content">
          <div className="profile-section-header">
            <h3>Contact Information</h3>
            <button className="edit-button">EDIT</button>
          </div>

          <div className="profile-info">
            <div className="profile-info-row">
              <span>First Name</span>
              <span className="profile-info-value">Santhosha</span>
            </div>
            <div className="profile-info-row">
              <span>Last Name</span>
              <span className="profile-info-value">Karoti Rajashekar</span>
            </div>
            <div className="profile-info-row">
              <span>Date of Birth</span>
              <span className="profile-info-value">--</span>
            </div>
            <div className="profile-info-row">
              <span>Email Address</span>
              <span className="profile-info-value">santhoshniecampus@gmail.com</span>
            </div>
            <div className="profile-info-row">
              <span>Address 1</span>
              <span className="profile-info-value">--</span>
            </div>
            <div className="profile-info-row">
              <span>Address 2</span>
              <span className="profile-info-value">--</span>
            </div>
            <div className="profile-info-row">
              <span>City</span>
              <span className="profile-info-value">--</span>
            </div>
            <div className="profile-info-row">
              <span>Postal Code</span>
              <span className="profile-info-value">--</span>
            </div>
            <div className="profile-info-row">
              <span>Country</span>
              <span className="profile-info-value">--</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;