import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading("Creating your account...");
      setSuccess("");
      setError("");

      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      data.append("password", password);

      const response = await axios.post(
        "https://Sanse.pythonanywhere.com/api/signup",
        data
      );

      setLoading("");
      setSuccess(response.data.message || "Registration Successful!");
      
      // Premium redirect delay
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setLoading("");
      setError("Registration failed. Please check your details.");
    }
  };

  return (
    <div className="premium-page">
      {/* Visual Branding Side */}
      <div className="visual-side signup-bg">
        <div className="glass-content">
          <span className="badge">Join the Elite</span>
          <h1>Innovation Awaits.</h1>
          <p>Register to unlock exclusive pricing and first-look access to the latest flagships.</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="form-side">
        <div className="login-card">
          <div className="brand-logo">PHONEX</div>
          <h2>Create Account</h2>
          <p className="subtitle">Enter your details to join our inner circle</p>

          {/* Status Indicators */}
          {loading && <p className="status-msg loading">{loading}</p>}
          {success && <p className="status-msg success">{success}</p>}
          {error && <p className="status-msg error">{error}</p>}

          <form onSubmit={submit}>
            <div className="input-field">
              <input 
                type="text" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <label>Username</label>
            </div>

            <div className="input-field">
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <label>Email Address</label>
            </div>

            <div className="input-field">
              <input 
                type="tel" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
              <label>Phone Number</label>
            </div>

            <div className="input-field">
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <label>Password</label>
            </div>

            <button type="submit" className="gold-btn">
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <p className="footer-text">
            Already have an account? <Link to="/">Sign In Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
