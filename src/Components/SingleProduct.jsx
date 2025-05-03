import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const SingleProduct = () => {
  const { product } = useLocation().state || {};  // Get product from location state
  const img_url = "https://Sanse.pythonanywhere.com/static/images/";


  // Local state for payment form
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(""); // Loading state
  let [success, setSuccess] = useState(""); // Success message
  let [error, setError] = useState(""); // Error message


  // Form submission handler for payment
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading("Processing Payment...");
    setSuccess("");
    setError("");

    // Validate phone number format (Kenyan number with 254)
    if (!/^(254)\d{9}$/.test(phone)) {
      setError("Invalid phone number format. Please enter a valid Kenyan number.");
      setLoading("");
      return;
    }

    try {
      const data = new FormData();
      data.append("amount", product.product_cost); // Add product cost
      data.append("phone", phone); // Add phone number

      // Sending request to the backend for MPesa payment
      const response = await axios.post("https://Sanse.pythonanywhere.com/api/mpesa_payment", data);
      
      setLoading(""); // Stop loading state
      setSuccess(response.data.message); // Set success message
    } catch (error) {
      setLoading(""); // Stop loading state
      setError(error.response?.data?.message || error.message || "Something went wrong. Please try again.");
    }
  };

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          No product selected. Please go back to the shop page.
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <Navbar />

        {/* Product Image */}
        <div className="col-md-3 card shadow">
          <img
            src={img_url + product.product_photo}
            alt=""
          />
        </div>

        {/* Product Details and Payment Form */}
        <div className="col-md-5 card shadow p-4">
          <h2>{product.product_name}</h2>
          <h3 className="text-warning">KSh {product.product_cost}</h3>
          <p className="text-muted">{product.product_desc}</p>

          {/* Display messages (loading, error, success) */}
          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Add to Cart Button */}
          

          {/* Payment Form */}
          <form onSubmit={submitForm}>
            <input
              type="number"
              className="form-control"
              placeholder="Amount (KSh)"
              required
              readOnly
              value={product.product_cost}
            />
            <br />
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Mpesa No (254xxxxxxxx)"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Update phone number state
            />
            <br />
            <button className="btn btn-primary" disabled={loading}>
              {loading ? <span className="spinner-border spinner-border-sm" /> : "Pay Now"}
            </button>
          </form>

          <hr />
         
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
