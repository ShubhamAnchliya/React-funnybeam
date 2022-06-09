import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer className="text-center text-lg-start">
    
        <div className="container text-center text-md-start mt-2">
        
        <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
                FunnyBeam Pvt. Ltd.
            </h6>
            <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
            </p>
            </div>
            
            <div className=" col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
                Services
            </h6>
            <p>
            Mobile and Web Application Development
            </p>
            <p>
            Digital Transformation
            </p>
            <p>
            IoT

            </p>
          
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
                Contact
            </h6>
            <p> New York, NY 10012, US</p>
            <p>
              
                info@funnybeam.com
            </p>
            <p> +919168666868</p>
            <p> +919168665568</p>
            </div>
            
        </div>
        
        </div>

    
    <div className="text-center p-2" style={{backgroundColor: "#228be6",color:"#d0ebff"} }>
        © 2021 Copyright FunnyBeam Pvt. Ltd.    All rights reserved.
        
    </div>
    
    </footer>

    </>
  )
}

export default Footer;