import React, { useState } from 'react';
import './editprofile-style.css'; // Import the CSS file
import beawareLogo from '../../../img/beaware_logo.png'; // Import the logo image
import manageProfileImage from '../../../img/manageprofile.png'; // Import the manage profile image
import messageImage from '../../../img/message.png';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation hooks
import { firebaseApp } from '../../../firebase'; // Import your Firebase configuration

const EditStreamPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the location object

  const [color, setColor] = useState('#FFFFFF'); // Initial color state
  const [newLogoUrl, setNewLogoUrl] = useState(''); // State for new logo URL

  const userData = location.state ? location.state.userData : null; // Retrieve userData from location state if available

  const handleSaveChanges = async () => {
    try {
      const currentUser = firebaseApp.auth().currentUser;
  
      if (!currentUser) {
        // Handle scenario where the user is not authenticated
        throw new Error('User not authenticated');
      }
  
      console.log('current user:', currentUser.email);
  
      // Fetch the old values from Firebase if either color or newLogoUrl is empty
      let oldColor = '';
      let oldUrl = '';
  
      if (!color || !newLogoUrl) {
        const userDoc = await firebaseApp.firestore().collection('users').doc(currentUser.uid).get();
        const userData = userDoc.data();
  
        // Set default color to light grey if color is not defined in Firebase
        oldColor = userData.color !== undefined && userData.color !== null ? userData.color : '#CCCCCC';
        oldUrl = userData.url || ''; // Default to empty string if url is not defined in Firebase
      }
  
      console.log(oldColor)
      console.log(oldUrl)

      console.log(color)
      console.log(newLogoUrl)

      // Update color and URL in Firebase
      await firebaseApp.firestore().collection('users').doc(currentUser.uid).update({
        color: color || oldColor, // Use old value or default if color is empty
        url: newLogoUrl || oldUrl // Use old value if newLogoUrl is empty
      });
  
      // Redirect back to dashboard after saving changes
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving changes:', error);
      // Display an error message to the user or handle the error gracefully
    }
  };
  
  

  const handleEmailClick = () => {
    // Redirect to the email page
    navigate('/editprofile', { state: { userData: userData } });
  };

  const handleSecurityClick = () => {
    // Redirect to the security page
    navigate('/editpassword');
  };

  const handleStreamClick = () => {
    // Redirect to the stream page
    navigate('/editstream');
  };

  const handleBackClick = () => {
    // Redirect to the dashboard page
    navigate('/dashboard');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <img src={beawareLogo} alt="BeAware Logo" className="logo" /> {/* Logo image */}
        <div className="button-wrapper">
          <button onClick={handleEmailClick}>Email</button>
          <button onClick={handleSecurityClick}>Password</button>
          <button onClick={handleStreamClick}>Stream</button>
          <button onClick={handleBackClick}>Back</button> {/* Go back functionality */}
        </div>
      </nav>

      {/* Image */}
      <div className="image-container">
        <img src={manageProfileImage} alt="Manage Profile" className="manage-profile-image" />
      </div>

      {/* Input Fields and Button */}
      <div className="color-change">
        <p className="edit-text">Edit color and stream</p>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      
      <div className="input-container">
        <input
          type="url"
          placeholder="Enter new logo URL"
          value={newLogoUrl}
          onChange={(e) => setNewLogoUrl(e.target.value)}
        />
        <button className="save-button" onClick={handleSaveChanges}>Save changes</button>
      </div>

      {/* JSX code */}
      <div className="message-image-container">
        <img src={messageImage} alt="Message Image" className="message-image" />
      </div>
    </div>
  );
};

export default EditStreamPage;
