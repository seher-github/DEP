import React from 'react';
import Layout from '../Components/layout/layout';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Install react-icons if not already installed


const Contact = () => {
  return (
    <Layout>
      <div style={{paddingTop:'110px', paddingLeft:"100px"}} className="contact-container d-flex flex-column align-items-center">
        <div className="row w-100">
          <div className=" pt-5 col-md-6 contact-form-container">
            <h2 className="contact-title">Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-success">Send Message</button>
            </form>
          </div>
          <div className="col-md-6 pt-5 contact-details-container">
            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-text">
                <h5>Location</h5>
                <p>123 Plant Street, Green City, Natureland</p>
              </div>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt className="contact-icon" />
              <div className="contact-text">
                <h5>Phone</h5>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="contact-icon" />
              <div className="contact-text">
                <h5>Email</h5>
                <p>contact@plantshop.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
