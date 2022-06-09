import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import "./AddUser.css";

const AddUser = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  });

  const navigate = useNavigate();

  const { firstName, lastName, email, mobile } = user;
 
    const InputEvent = (e) => {
      // const {name, value} = e.target;

      setUser({ ...user,[e.target.name]: e.target.value})
    //   setUser((prevData) => {
    //     return {
    //         ...prevData, 
    //         [name]: value,
    //     };
    // });
};



const formSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:3003/users", user);
  
  navigate("/users");

}

//   const inputEvent = (event) => {

//     setName(event.target.value);
// };

// const onSubmit = () => {
//   setFName(name);
// }




// const InputEvent = (event) => {

//   const {name, value} = event.target;

//   setNote((prevData) => {
//       return {
//           ...prevData,
//           [name]: value,
//       };
//   });
//   console.log(note);
// };


/* <textarea 
name='content'
value={note.content}
onChange={InputEvent}
placeholder='write note ....'
onClick={expandTxtArea}

>
</textarea> */


  return (
    <>
        <Navbar/>
        <section id="addUser" className="addUser">
         <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='text-center mt-4'>Add User Detail</h2>
        </div>

        <div className="row ">

            <form className="addUser-form mt-4" 
            onSubmit={formSubmit}
            >

    

                <div className="form-group col-md">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    className="form-control" 
                    id="firstName" 
                    placeholder="Enter First Name"               
                    value={firstName}
                    onChange={InputEvent}
                    required 
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    className="form-control" 
                    id="lastName" 
                    placeholder="Enter Last Name"               
                    value={lastName}
                    onChange={InputEvent}
                    required 
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    placeholder="Enter Email" 
                    value={email}
                    onChange={InputEvent}
                    required 
                />
                </div>


                <div className="form-group ">
                    <label htmlFor="mobile">Contact Number</label>
                    <input 
                      type="mobile" 
                      name="mobile" 
                      className="form-control" 
                      id="mobile" 
                      placeholder="Enter Contact Number"               
                      value={mobile}
                      onChange={InputEvent}
                      required 
                    />
                  </div>
          
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}

              <div className="text-center buttons mt-2">
                <button className='btn btn-primary mx-1' type="submit">Submit</button>
                <Link to={'/users'} className='btn btn-danger' >Cancel </Link>
              </div>

            </form>
          </div>

         </div>

        </section>
        
        <br />

        <Footer/>
    </>
  )
}

export default AddUser;