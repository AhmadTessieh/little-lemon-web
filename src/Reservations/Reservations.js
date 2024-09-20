import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservations.css'; // External stylesheet for styling

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic

    navigate('/');
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Reserve a Table</h1>
      <p className="booking-subtitle">We look forward to hosting you!</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="booking-label" htmlFor="name">Name</label>
        <input
          className="booking-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="booking-label" htmlFor="email">Email</label>
        <input
          className="booking-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="booking-label" htmlFor="date">Date</label>
        <input
          className="booking-input"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label className="booking-label" htmlFor="time">Time</label>
        <input
          className="booking-input"
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label className="booking-label" htmlFor="guests">Number of Guests</label>
        <input
          className="booking-input"
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label className="booking-label" htmlFor="requests">Special Requests</label>
        <textarea
          className="booking-textarea"
          id="requests"
          name="requests"
          value={formData.requests}
          onChange={handleChange}
        ></textarea>

        <button className="booking-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reservations;
