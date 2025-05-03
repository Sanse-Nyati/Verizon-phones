import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import GetPhones from './Components/GetPhones';
import "bootstrap/dist/js/bootstrap.min.js";
import AddProducts from './Components/AddProducts';
import SingleProducts from './Components/SingleProduct';
import AdminLogin from './Components/AdminLogin';
import Profile from './Components/Profile';
import ContactPage from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Chatbot from './Components/Chatbot';
import Cart from './Components/Cart';
import Loader from './Components/Loader';
import OrderTracker from './Components/OrderTracker';



function App() {
  return (
    
      <Router>
        <div className="App">
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<SignIn />} />
            <Route path='/getphones' element={<GetPhones />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/addproducts' element={<AddProducts />} />
            <Route path='/singleproduct' element={<SingleProducts />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path='/loader' element={<Loader />} />
            <Route path='/orders' element={<OrderTracker />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
