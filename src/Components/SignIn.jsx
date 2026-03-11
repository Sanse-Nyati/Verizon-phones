import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading("Authenticating...");
      
      const data = new FormData();
      data.append("username", username);
      data.append("password", password);

      const response = await axios.post(
        "https://Sanse.pythonanywhere.com/api/signin",
        data
      );

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/getphones");
      } else {
        setLoading("");
        setError(response.data.message);
      }
    } catch (error) {
      setLoading("");
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="premium-page">
      {/* Visual Section */}
      <div className="visual-side">
        <div className="glass-content">
          <span className="badge">Exclusive Collection</span>
          <h1>The New Standard of Mobile.</h1>
          <p>Sign in to explore our latest flagship releases.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-side">
        <div className="login-card">
          <div className="brand-logo">PHONEX</div>
          <h2>Welcome Back</h2>
          <p className="subtitle">Please enter your credentials</p>

          {/* Feedback Messages */}
          {loading && <p className="status-msg loading">{loading}</p>}
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
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <label>Password</label>
            </div>

            <button type="submit" className="gold-btn">
              {loading ? "Please Wait..." : "Enter Store"}
            </button>
          </form>

          <p className="footer-text">
            Don't have an account? <Link to="/signup">Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
