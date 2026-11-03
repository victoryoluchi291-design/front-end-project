import React, { useState } from 'react';
import { TextField, Button, Alert, Collapse, Grid } from '@mui/material';
import './RegistrationPage.css'; 
import { Link } from 'react-router-dom'; // Import Link for navigation

// Your custom Render API link embedded exactly where it's needed
const API_URL = 'https://students-learning-api.onrender.com/api/auth';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '', // Configured to match database backend key requirements
  password: '',
};

export default function Register() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Safety check verification to avoid blank submissions
    if (
      !formData.firstName || 
      !formData.lastName || 
      !formData.email || 
      !formData.phoneNumber || 
      !formData.password
    ) {
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Packages data parameters cleanly
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Server response success payload:', data);

        // Turn on the animated success alert component banner
        setShowSuccess(true);
        
        // Reset local views back to blank fields
        setFormData(INITIAL_FORM_STATE);

        // Clear the success alert message view frame after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert('Registration failed. Please check your data details or try again.');
      }
    } catch (error) {
      console.error('Network Error connection roadblock:', error);
      alert('An error occurred. Please verify your network server connection status.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Join us today! Please fill in your details to set up your account.
        </p>

        {/* Smooth layout transition container wrapper for notifications */}
        <Collapse in={showSuccess}>
          <Alert 
            severity="success" 
            className="status-alert"
            onClose={() => setShowSuccess(false)}
          >
            Account created successfully! Welcome aboard.
          </Alert>
        </Collapse>

        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            {/* Split layout positioning for First and Last Name elements on desktop */}
            <Grid item xs={12} sm={6}>
              <TextField
                className="form-field"
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="form-field"
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
          </Grid>

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
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
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
            className="register-btn"
            type="submit"
            variant="contained"
            fullWidth
            disableElevation
          >
            Sign Up
          </Button>
        </form>

        <div className="form-footer">
          Already have an account? <Link to="/login"> LogIn</Link>
        </div>
      </div>
    </div>
  );
}
