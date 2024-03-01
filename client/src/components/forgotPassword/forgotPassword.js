import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './forgotPassword.css';
import forgotImage from './forgot.jpg'; 


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleCheckEmail = async () => {
        console.log(email);
        try {
            const signInMethods = await auth.fetchSignInMethodsForEmail(email);
            console.log(signInMethods);
            if (signInMethods && signInMethods.length > 0) {
                setSuccessMessage('Email found. Proceed to reset password.');
                setError(null);
                navigate('/setpassword');
            } else {
                setError('Email not found. Please enter a valid email.');
                setSuccessMessage(null);
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setError('An error occurred while checking the email. Please try again later.');
            setSuccessMessage(null);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="f-container">
            <div className="image-container">
            <img src={forgotImage} alt="Forgot Password" className="forgot-image" />
            </div>
            <div className="form-container">
                <h1 className="heading">Can't Sign in?</h1>
                <h3><br />Email</h3>
                <p>Enter the email address associated with this account</p>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="input-field" />
                <button onClick={handleCheckEmail} className="button">Continue</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
