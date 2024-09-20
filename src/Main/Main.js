import React from 'react';
import './Main.css';
function Main() {

  const testimonials = [
    { rating: '⭐⭐⭐⭐⭐', name: 'John Doe', review: 'Amazing food!' },
    { rating: '⭐⭐⭐⭐', name: 'Jane Smith', review: 'Great service and fresh ingredients.' },
    { rating: '⭐⭐⭐⭐⭐', name: 'James Lee', review: 'Best restaurant in town!' },
  ];
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <span className="rating">{testimonial.rating}</span>
            <p className="name">{testimonial.name}</p>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;