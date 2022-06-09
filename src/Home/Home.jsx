import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import homeImg from "../assets/hero-img.svg";
import  "./Home.css";
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
        <Navbar/>
        <br />
        <section id="hero" className="d-flex align-items-center">

            <div className="container">
            <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Bettter digital experience with FunnyBeam</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div>
                    <NavLink to="/about" className="btn-get-started scrollto">Get Started</NavLink>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src={homeImg} className="img-fluid animated" alt="" />
                </div>
            </div>
            </div>

        </section>
        
        <br/>
        <Footer/>
    </>
  )
}

export default Home;