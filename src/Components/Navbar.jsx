import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // 👈 Import cart context

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { cart } = useCart(); // 👈 Get cart from context

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-md glass-navbar fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/getphones" className="navbar-brand">
          <img src="images/Verizon.png" alt="Logo" height="50px" />
        </Link>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/getphones" className="nav-link text-Black">
                <img src="images/home-button.png" alt="" height="20px" /> <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-Black">
                <img src="images/circle.png" height="20px" alt="" /> <b>Contact</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-Black">
                <img src="images/group.png" height="20px" alt="" /> <b>About Us</b>
              </Link>
            </li>
          </ul>

          {/* Right icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link to="/chatbot" className="nav-link text-Black">
                <img src="images/machine-learning.png" alt="" height="20px" /> <b>Chat With Me</b>
              </Link>
            </li>

            {/* Cart Icon with Badge */}
            <li className="nav-item me-3 position-relative">
              <Link to="/cart" className="nav-link position-relative">
                <img src="images/shopping-cart.png" height="30px" alt="Cart" />
                {cart.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            {user ? (
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-primary"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/user.png" alt="" height="20px" />
                  {user.username}
                </span>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><Link to="/profile" className="dropdown-item"> <img src="images/user.png" height="20px" alt="" /> My Profile</Link></li>
                  <li><Link to="/orders" className="dropdown-item"> <img src="images/checkout.png" height="20px" alt="" /> Orders</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <img src="images/power.png" alt="" /> Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="fas fa-sign-in-alt"></i> Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    <i className="fas fa-user-plus"></i> Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
