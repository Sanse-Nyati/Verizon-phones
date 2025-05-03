import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '80px auto 0', padding: '20px' }}>

        {/* Glassmorphism effect for About Us */}
        <div
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '40px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1 style={{ color: 'blue', margin: 0, fontWeight: 'bold' }}>ABOUT US</h1>
        </div>

        {/* Card for YouTube video */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px',
          }}
        >
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/WG1ylpmfyxo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '12px',
              }}
            ></iframe>
          </div>
        </div>
    <h1 style={{ color: 'blue', margin: 0, fontWeight: 'bold' }}>OUR LOCATION
    </h1>
        {/* Card for Google Map */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px',
          }}
        >
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816205485161!2d36.825238573809976!3d-1.2841888987036039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11299e51a7b3%3A0xcd91ac01b702b7de!2sLuthuli%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1745680096037!5m2!1sen!2ske"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luthuli Street Nairobi Map"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
                borderRadius: '12px',
              }}
            ></iframe>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
