import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader"; // ✅ Import the Loader

const GetProducts = () => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(true); // ✅ Changed from string to boolean
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [successMessage, setSuccessMessage] = useState(""); // State for success message

  const { addToCart } = useCart();

  const img_url = "https://Sanse.pythonanywhere.com/static/images/";

  const GetProducts = async () => {
    setError("");
    setLoading(true); // ✅ Start loader
    try {
      const response = await axios.get("https://Sanse.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // ✅ Stop loader
    }
  };

  const handleSearch = (value) => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Function to handle adding to cart and showing success message
  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage("Product added successfully!");

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className="row">
      <Navbar />
      <Carousel />

      <h3 className="mt-5 text-primary">AVAILABLE PHONES</h3>

      {/* ✅ Loader shown during data fetching */}
      {loading && (
        <div className="d-flex justify-content-center my-4">
          <Loader />
        </div>
      )}

      <b className="text-danger"> {error} </b>

      <div className="row justify-content-center my-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Products By Name"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Show success message */}
      {successMessage && (
        <div className="alert alert-success text-center my-3">
          {successMessage}
        </div>
      )}

      {/* ✅ Only show products after loading completes */}
      {!loading && (
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 justify-content-center mb-4" key={product.id}>
              <div className="card shadow card-margin">
                <img
                  src={img_url + product.product_photo}
                  alt=""
                  className="product_image mt-4"
                />
                <div className="card-body">
                  <h5 className="mt-2">{product.product_name}</h5>
                  <p className="text-muted">{product.product_desc.slice(0, 10)}</p>
                  <b className="text-warning">{product.product_cost} KSh</b>
                  <button
                    className="btn btn-warning mt-2 w-100"
                    onClick={() => handleAddToCart(product)} // Call handleAddToCart
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GetProducts;
