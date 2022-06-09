import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaBars, FaTimes , FaRegLaughWink} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    

  return (
    <>
        {/* <h1>NavBar</h1>  */}
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />  
        <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container ">

          <Link to="/" className="nav-logo">
            FunnyBeam 
            <i className='emoji'><FaRegLaughWink/></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <Link
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
               
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
          
            <li className="nav-item">
              <Link
               
                to="/service"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link
               
                to="/users"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
               Users
              </Link>
            </li>

            <li className="nav-item">
              <Link
               
                to="/contact"
                activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>

          

           

          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "<FaTimes/>" : "<FaBars/>"}></i> */}
            {  click ? <FaTimes/>:<FaBars/>
            }         
          </div>

        </div>
      </nav> 
    </>
  )
}

export default Navbar;