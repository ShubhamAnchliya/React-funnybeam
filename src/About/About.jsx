import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./About.css";
import aboutImg from "../assets/aboutImg.svg";
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
        <Navbar/>
        <section id="about" className="about">
      <div className="container">

        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={aboutImg} className="img-fluid animated" alt="" data-aos="zoom-in" />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">We design and build your website, and make sure you can be found on Google too!</h3>
            <p data-aos="fade-up" data-aos-delay="100">
            We help companies, big and small, discover what makes them unique and channel it into a memorable experience that outsells and outshines their competition online.

            </p>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-receipt"></i>
                <h4>The most responsive, friendly service you've likely ever had.</h4>
                <p>Clients hire us based on our merit – they love us for our accessibility. We go to great lengths to be incredibly responsive to your needs so you never feel ignored and always feel taken care of.</p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-cube-alt"></i>
                <h4>The talent powerhouse of India</h4>
                <p>We are creating a new wave in remote hiring by helping companies hire from a strong network of top talents from India for the world.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <br />
    
    <Footer/>
    </>
  )
}

export default About;