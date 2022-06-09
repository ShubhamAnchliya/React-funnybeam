import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Contact.css";

const Contact = () => {

  const [data, setData] = useState({

    name:"",
    email:"",
    mobile:"",
    subject:"",
    message:""
    
  });

  const InputEvent = (event) => {

    const { name, value } = event.target;

    setData((preVal) => {

      return {
        ...preVal,
        [name]: value,
      };
    });

  };

  const formSubmit = (e) => {

    e.preventDefault(); 

    alert(`My name is ${data.name}. 
      My mobile number is ${data.mobile},
      my email is ${data.email}.
      My message is ${data.message} `);
    
  }

  return (

    <>
        <Navbar/>
        <section id="contact" className="contact">
         <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='text-center mt-4'>Contact Us </h2>
        </div>

        <div className="row ">

          {/* <div className=""> */}

            <form className="php-email-form mt-4" onSubmit={formSubmit}>

              <div className="row">

                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name"               
                    value={data.name}
                    onChange={InputEvent}
                    required 
                  />
                </div>

                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="name">Your Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    placeholder="Your Email" 
                    value={data.email}
                    onChange={InputEvent}
                    required 
                />
                </div>

              </div>

              <div className="row">
    
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="name">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="subject" 
                    id="subject" 
                    placeholder="Subject" 
                    value={data.subject}
                    onChange={InputEvent}
                    required 

                  />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="phone">Your Mobile Number</label>
                    <input 
                      type="mobile" 
                      name="mobile" 
                      className="form-control" 
                      id="mobile" 
                      placeholder="Your Mobile Number"               
                      value={data.mobile}
                      onChange={InputEvent}
                      required 
                    />
                  </div>

              </div>

              <div className="form-group mt-3">
                <label htmlFor="name">Message</label>
                <textarea 
                  className="form-control" 
                  name="message" 
                  rows="6" 
                  value={data.message}
                  onChange={InputEvent}
                  required
                >
                </textarea>
              </div>

              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}

              <div className="text-center mt-2">
                <button type="submit">Send Message</button>
              </div>

            </form>
          </div>

         </div>

         {/* </div> */}
        </section>

        <br />
        <Footer/>
    </>
  )
}

export default Contact;