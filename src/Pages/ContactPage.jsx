import React, { useState } from 'react';
import { TextField, Button, Alert, Collapse } from '@mui/material';
import './ContactPage.css'; // Import your custom stylesheet

export default function ContactUs() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    question: '',
  });

  // Controls displaying the success banner
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // basic safety check before firing submit state
    if (!formData.email || !formData.subject || !formData.question) return;

    console.log('Sending Question Data:', formData);
    
    // Trigger internal success notice panel
    setShowSuccess(true);
    
    // Clear input form spaces
    setFormData({ email: '', subject: '', question: '' });

    // Optional: Hide success banner after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have a question? Drop us a line and we'll get back to you soon.
        </p>

        {/* Smooth animation wrapper for inline Success Box */}
        <Collapse in={showSuccess}>
          <Alert 
            severity="success" 
            className="status-alert"
            onClose={() => setShowSuccess(false)}
          >
            Thank you! Your question has been successfully submitted.
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
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            variant="outlined"
          />

          <TextField
            className="form-field"
            fullWidth
            label="Your Question"
            name="question"
            multiline
            rows={5}
            value={formData.question}
            onChange={handleChange}
            required
            variant="outlined"
            placeholder="Please describe your question in detail..."
          />

          <Button
            className="submit-btn"
            type="submit"
            variant="contained"
            fullWidth
            disableElevation
          >
            Submit Question
          </Button>
        </form>
      </div>
    </div>
  );
}
