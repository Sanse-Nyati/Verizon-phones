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
      setLoading("Please Wait...");
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
      setSuccess(response.data.message);

      // Redirect to sign in after 2s delay
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setLoading("");
      setError("Something Went Wrong");
    }
  };

  return (
    <div className="center-wrapper">
      <div className="glow-container">
        <div className="glow-border"></div>
        <div className="glow-content">
          <h2 className="text-primary">Sign Up</h2>
          <b className="text-warning">{loading}</b>
          <b className="text-success">{success}</b>
          <b className="text-danger">{error}</b>
          <form onSubmit={submit}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              className="form-control my-2"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="form-control my-2"
              placeholder="Enter Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-danger w-100 my-2">
              Sign Up
            </button>
          </form>
          <p className="text-light">
            Already Have An Account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;