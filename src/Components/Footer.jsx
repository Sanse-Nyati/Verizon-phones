import { Link } from "react-router-dom";
const Footer = () => {
  return (
      <div className="">
          <section className="row bg-primary p-4">
              <div className="col-md-4 text-white">
                  <h3 className="text-center">ABOUT US</h3>
                  <p>Welcome to Verizon Phones – your ultimate destination for the latest smartphones at the best prices.
</p>
<p>
From the iconic iPhone, the cutting-edge Google Pixel, and the dependable Samsung, to the stylish and budget-friendly options like Tecno, Infinix, and Oppo – we bring you a wide range of top brands, all in one place. </p>
<p>
At Verizon Phones, we believe staying connected should be easy and affordable. That’s why we offer authentic devices, fast delivery, and outstanding customer support – every step of the way.
</p>

<p>

Shop smart. Shop with confidence. Only at Verizon Phones. </p>
              </div>

              <div className="col-md-4">
                  <h4 className="text-white text-center">Contact Us</h4>
                  {/* Contact Information */}
                  <p><strong>Email:</strong> verizon@gmail.com</p>
                  <p><strong>Phone:</strong> +254116128538</p>
                  <p><strong>Address:</strong> Luthuli Main Street, Suite 100, Nairobi City, Kenya</p>

                  {/* Embedded Google Map */}


                  {/* Quick Links */}
                  <h5 className="text-white text-center">Quick Links</h5>
                  <ul className="list-unstyled text-center">
                      <li><Link to="#about" className="text-white">About Us</Link ></li>
                      <li><Link to="#services" className="text-white">Our Services</Link ></li>
                      <li><Link to="#contact" className="text-white">Contact</Link ></li>
                  </ul>

                  {/* Call to Action Button */}
                  <div className="text-center mt-3">
                      <Link to="#contact" className="btn btn-outline-warning">Get in Touch</Link >
                  </div>
              </div>

              <div className="col-md-4">
                  <h3 className="text-center text-white">Stay Connected</h3>
                  <Link to="https://facebook.com/verizon" aria-label="Facebook">
                      <img src="images/download (1).png" width="30px" alt="Facebook" style={{marginRight:'20px'}} />
                  </Link >
                  
                  <Link to="https://instagram.com/sanse_58" aria-label="Instagram">
                      <img src="images/images (3).jpeg" width="30px" alt="Instagram" style={{marginRight:'20px'}} />
                  </Link >
                  <Link to="https://wa.me/254116128538" aria-label="WhatsApp">
                      <img src="images/whatsapp.jpeg" width="30px" alt="WhatsApp Icon" />
                   </Link>

                  <p>Follow us on social media to stay updated with our latest projects, news, and events. Join our community and connect with us to share your thoughts, ideas, or experiences!</p>
              </div>
          </section>
          <footer className="bg-dark text-white text-center p-2">
              <h5>Developed By Andrew &copy; 2025. All rights Reserved</h5>
          </footer>
      </div>
  );
}

export default Footer;
