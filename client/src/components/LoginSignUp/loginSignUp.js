import React, { useState } from 'react';
import './style.css';
import logImage from './img/log.svg';
import regImage from './img/register.svg';
import logo from './img/beaware_logo.png';
import {firebaseApp} from './firebase.js';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// import 'firebase/firestore';

function SignInSignUpForm() {
      const navigate = useNavigate(); // Access the navigate function

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpMode = async () => {
    setIsSignUpMode(true);
  };

  const SignUpHit = async () => {
    // event.preventDefault(); // Prevent form submission
    //console.log("hello");
  
    // Get form values
    const username = document.getElementById('username1').value;
    const email = document.getElementById('email1').value.trim();
    const password = document.getElementById('password1').value;
    const color = document.getElementById('color').value;
    const url = document.getElementById('url').value;
    console.log("hello");
    console.log(email);
    try {
      // Create user in Firebase Authentication
      const userCredential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      // Add user details to Firestore collection
      await firebaseApp.firestore().collection("users").doc(user.uid).set({
        username: username,
        email: email,
        color: color,
        url: url                
      });
  
      // Set sign up mode to true
      //setIsSignUpMode(true);
  
      console.log("User created successfully!");
            setIsSignUpMode(false)

      //navigate('/');
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  }

  const loginHit = async () => {
    const username = document.getElementById("username").value;
    console.log(username);
    const password = document.getElementById("password").value;
    console.log(password);
    //const navigate = useNavigate(); // Access the navigate function


    try {
      // Sign in user with email and password
      const userCredential = await firebaseApp.auth().signInWithEmailAndPassword(username, password);
      console.log(userCredential.user)
      console.log("User logged in successfully:", userCredential.user);
      navigate('/dashboard');



    } catch (error) {
      // Handle login errors
      console.error("Error logging in:", error.message);
    }
  }

  const handleSignInMode = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={isSignUpMode ? "container sign-up-mode" : "container"}>
      <div className="forms-container">
        <div className="signin-signup">


          <form action="#" className="sign-in-form">
            <img src={logo} className="image-logo" alt="Logo" />
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" id='username'/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id='password'/>
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={loginHit}/>
            <Link to="/forgotpassword" className="forgot-password-link">Forgot Password?</Link>

          </form>


          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" id='username1'/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" id='email1'/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id='password1'/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="color" placeholder="Color" id='color'/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="url" placeholder="URL" id='url'/>
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={SignUpHit}/>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src={logImage} className="image" alt="Sign in" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInMode}>
              Sign in
            </button>
          </div>
          <img src={regImage} className="image" alt="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default SignInSignUpForm;