import React from 'react';
import bg from './bg.png'


const Hero = () => {
  return (
    <div className="hero-container  d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center',paddingTop:'100px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text">Plants Shop that can add life to your home</h1>
            <p style={{fontSize:'18px'}}>At Plants Shop, we believe that adding a touch of green can transform any space into a vibrant oasis.</p>
            <button className="btn btn-primary" style={{backgroundColor:'green', border:'none', padding:'10px', fontSize:'20px'}}>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
