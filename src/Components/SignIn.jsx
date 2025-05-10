import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");

  let navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading("Please Wait...");

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
      setError("Something Went Wrong");
    }
  };

  return (
    <div className="center-wrapper">
      <h1 className="b text-danger text-center mb-4">Verizon Media</h1>
      <div className="glow-container">
        <div className="glow-border"></div>
        <div className="glow-content">
          <h2 className="text-primary">Sign In</h2>
          <b className="text-warning">{loading}</b>
          <b className="text-danger">{error}</b>
          <form onSubmit={submit}>
            <input
              type="text"
              className="form-control my-2"
              required
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100 my-2">Sign In</button>
          </form>
          <p className="text-light">
            Don't Have An Account? <Link to="/signup">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
