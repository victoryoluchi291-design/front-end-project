import React, { useState } from 'react';
import { TextField, Button, Alert, Collapse } from '@mui/material';
import './LoginPage.css'; // Make sure this file exists in your project directory
import { Link } from 'react-router-dom'; // Import Link for navigation

// Your specific Render API login endpoint URL string
const API_URL = 'https://onrender.com';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

export default function Login() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Safety verification check ensuring fields are not left blank
    if (!formData.email || !formData.password) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Packs email and password data params cleanly
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login server success payload:', data);
        
        // Turn on the animated success alert notification banner
        setShowSuccess(true);
        
        // Reset the form values back to empty strings
        setFormData(INITIAL_FORM_STATE);

        // Remove the success alert banner from view automatically after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert('Invalid email or password. Please verify your credentials and try again.');
      }
    } catch (error) {
      console.error('Network Error connection roadblock:', error);
      alert('An error occurred. Please verify your network server connection status.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Please enter your credentials to access your account.
        </p>

        {/* Smooth expanding transition layout containing the inline status block wrapper */}
        <Collapse in={showSuccess}>
          <Alert 
            severity="success" 
            className="status-alert"
            onClose={() => setShowSuccess(false)}
          >
            Success! Processing your secure login dashboard request...
          </Alert>
        </Collapse>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            className="form-field"
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
          />

          <TextField
            className="form-field"
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            variant="outlined"
          />

          <Button
            className="login-btn"
            type="submit"
            variant="contained"
            fullWidth
            disableElevation
            sx={{ mt: 1 }}
          >
            Log In
          </Button>
        </form>

        <div className="form-footer">
          <a href="#forgot" className="form-link">Forgot password?</a>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
