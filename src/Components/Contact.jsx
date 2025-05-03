import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading('Submitting...');
    setSuccess('');
    setError('');

    try {
      const contactData = {
        name,
        email,
        message,
      };


      const response = await axios.post('https://Sanse.pythonanywhere.com/api/contact', contactData);

      if (response.status === 200) {
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Something went wrong, please try again.');
      }
    } catch (err) {
      setError('Something went wrong, please try again.');
    } finally {
      setLoading('');
    }
  };

  return (
    <div className="container mt-5">
        <Navbar/>
      <h2 className="text-center">Contact Us</h2>

      {loading && <div className="alert alert-info">{loading}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            className="form-control"
            rows="4"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
