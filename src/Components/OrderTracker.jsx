import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Define status steps and corresponding images
const statusSteps = [
  { status: "Order Placed", image: "/images/clipboard.png" },
  { status: "In Transit", image: "/images/fast-delivery.png" },
  { status: "Arrived At the Pickup Station", image: "/images/man.png" },
  { status: "Out for Delivery", image: "/images/delivery.png" },
  { status: "Delivered", image: "/images/delivered.png" }
];

const OrderTracker = () => {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState("");

  const handleTrackOrder = (e) => {
    e.preventDefault();
    setError("");
    const order = localStorage.getItem(`order_${orderId}`);
    if (!order) {
      setOrderDetails(null);
      setError("Order not found.");
      return;
    }
    setOrderDetails(JSON.parse(order));
  };

  // Automatically update status every 2 minutes
  useEffect(() => {
    if (!orderDetails || orderDetails.status === "Delivered") return;

    const interval = setInterval(() => {
      const currentIndex = statusSteps.findIndex(s => s.status === orderDetails.status);
      if (currentIndex < statusSteps.length - 1) {
        const newStatus = statusSteps[currentIndex + 1].status;
        const updatedOrder = { ...orderDetails, status: newStatus };
        localStorage.setItem(`order_${orderDetails.id}`, JSON.stringify(updatedOrder));
        setOrderDetails(updatedOrder);
      } else {
        clearInterval(interval);
      }
    }, 2 * 60 * 1000); // 2 minutes

    return () => clearInterval(interval);
  }, [orderDetails]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h3 className="text-primary mb-4">Track Your Order</h3>

        <form onSubmit={handleTrackOrder} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Order ID (e.g., ORD-...)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">Track Order</button>
          </div>
        </form>

        {error && <div className="alert alert-danger">{error}</div>}

        {orderDetails && (
          <div className="card shadow p-4">
            <h5>Order ID: {orderDetails.id}</h5>
            <p>Phone: {orderDetails.phone}</p>
            <p>Total: KSh {orderDetails.total_amount}</p>

            {/* Horizontal Order Status Tracker */}
            <div className="my-5 px-2">
              <h6 className="mb-4 text-center">Order Progress</h6>
              <div className="d-flex justify-content-between align-items-center flex-wrap text-center">
                {statusSteps.map((step, idx) => {
                  const currentIndex = statusSteps.findIndex(s => s.status === orderDetails.status);
                  const isActive = idx === currentIndex;
                  const isCompleted = idx < currentIndex;

                  return (
                    <div key={idx} className="flex-fill mx-2" style={{ minWidth: "100px" }}>
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          margin: "0 auto",
                          borderRadius: "50%",
                          backgroundColor: isCompleted || isActive ? "#d1e7dd" : "#f8f9fa",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: isActive ? "2px solid #198754" : "1px solid #ccc",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.status}
                          style={{
                            width: "40px",
                            height: "40px",
                            filter: isCompleted || isActive ? "none" : "grayscale(80%)"
                          }}
                        />
                      </div>
                      <small
                        className={`d-block mt-2 ${
                          isActive ? "text-success fw-bold" : isCompleted ? "text-muted" : "text-secondary"
                        }`}
                      >
                        {step.status}
                      </small>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Product list */}
            <ul className="list-group mt-4">
              {orderDetails.items.map((item, idx) => (
                <li className="list-group-item" key={idx}>
                  {item.product_name} - {item.product_cost} KSh
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderTracker;
