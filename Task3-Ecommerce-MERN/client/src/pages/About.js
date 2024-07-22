import React from 'react';
import Layout from '../Components/layout/layout';
import { Link } from 'react-router-dom';
import pic from './plant.jpg'; 
import pic1 from './plant1.webp'


const About = () => {
  return (
    <Layout>
      <div className="about " >
        <div className="row w-100">
          <div className="col-md-6 ">
            <h3 className="abt-heading">New Arrivals</h3>
            <h1 className="abt-title">Save 45% <br /> <b>OFF</b></h1>
            <Link to="/shop" className="abt-btn">Shop Now</Link>
          </div>
          
        </div>
      </div>
      <div className="about-content d-flex align-items-center" style={{ height: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-image" style={{ backgroundImage: `url(${pic})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="text" style={{ color: 'green' }}>Clean Air In Your Home</h1>
              <p style={{fontSize:'23px'}}>We aim to bring the best quality plants to your doorstep. Our collection includes a variety of plants that are perfect for enhancing your home’s ambiance. Join us in our journey to make the world greener, one plant at a time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content d-flex align-items-center" style={{ height: '100vh' }}>
        <div className="container">
          <div className="row">
            
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="text" style={{ color: 'green' }}>Plants For Your Interior</h1>
              <p style={{fontSize:'23px'}}>We aim to bring the best quality plants to your doorstep. Our collection includes a variety of plants that are perfect for enhancing your home’s ambiance. Join us in our journey to make the world greener, one plant at a time.</p>
            </div>
            <div className="col-md-6">
              <div className="about-image" style={{ backgroundImage: `url(${pic1})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
