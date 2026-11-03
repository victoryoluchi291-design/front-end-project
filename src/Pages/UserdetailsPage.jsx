import React, { useState } from 'react';
import { TextField, Button, Alert, Collapse, Grid } from '@mui/material';
import './UserdetailsPage.css'; // Make sure this stylesheet exists in your directory

// Using a reliable free mock API that accepts firstName, lastName, and review data payloads
const API_URL = 'https://typicode.com';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  review: '',
};

export default function UserdetailsPage() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Safety check verification to avoid blank submissions
    if (!formData.firstName || !formData.lastName || !formData.review) {
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Packaging your payload parameters cleanly for the server
        body: JSON.stringify({
          title: `${formData.firstName} ${formData.lastName}`, // Combines names into a title parameter for the mock API
          body: formData.review,                             // Maps your review text parameters
          userId: 1
        }), 
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Review server success response payload:', data);

        // Turn on the animated success alert notification banner
        setShowSuccess(true);
        
        // Reset local views back to blank fields
        setFormData(INITIAL_FORM_STATE);

        // Clear the success alert message view frame after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert('Failed to submit your review. Please try again.');
      }
    } catch (error) {
      console.error('Network Error connection roadblock:', error);
      alert('An error occurred. Please verify your network server connection status.');
    }
  };

  return (
    <div className="review-container">
      <div className="review-card">
        <h1 className="review-title">Leave a Review</h1>
        <p className="review-subtitle">
          We value your feedback! Share your experience with us below.
        </p>

        {/* Smooth layout transition container wrapper for notifications */}
        <Collapse in={showSuccess}>
          <Alert 
            severity="success" 
            className="status-alert"
            onClose={() => setShowSuccess(false)}
          >
            Thank you! Your review has been submitted successfully.
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
            label="Your Review"
            name="review"
            multiline
            rows={5}
            value={formData.review}
            onChange={handleChange}
            required
            variant="outlined"
            placeholder="Write your review in detail here..."
          />

          <Button
            className="review-btn"
            type="submit"
            variant="contained"
            fullWidth
            disableElevation
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
}
