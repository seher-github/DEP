import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-dark text-light p-4" style={{ minHeight: '50vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-light">Company</h5>
            <ul className="list-unstyled" style={{listStyle:'none'}}>
              <li><Link to={"/about"} className="text-light">About</Link></li>
              <li><Link to={"/contact"} className="text-light">Contact</Link></li>
              <li><Link to={"/policy"} className="text-light">Privacy Policy</Link></li>
              <li><Link to={"/dashboard"} className="text-light">Dashboard</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-light">Services</h5>
            <ul className="list-unstyled">
              <li><Link to={"/services/consulting"} className="text-light">Consulting</Link></li>
              <li><Link to={"/services/support"} className="text-light">Support</Link></li>
              <li><Link to={"/services/installation"} className="text-light">Installation</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-light">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-light">Contact Info</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@ecommerce.com" className="text-light">info@ecommerce.com</a></li>
              <li><a href="tel:+1234567890" className="text-light">+1 234 567 890</a></li>
              <li>123 Plant Street, Green City</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0" style={{paddingTop:'100px'}}>
              All Rights Reserved &copy; E-commerce Website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
