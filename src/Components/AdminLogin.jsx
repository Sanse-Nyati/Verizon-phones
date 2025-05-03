import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (password === 'Andrew10951') {
      // Redirect to 'addproducts' if the password is correct
      navigate('/addproducts'); 
    } else {
      // Display an error message if the password is incorrect
      setError('Incorrect password!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center text-primary mb-4">ADMIN LOGIN</h3>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state on change
            style={{ borderRadius: '10px' }}
          />
        </div>

        {error && <p className="text-danger text-center">{error}</p>}  {/* Display error if password is incorrect */}

        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={handleLogin} style={{ borderRadius: '10px' }}>
            Login
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default AdminLogin;
