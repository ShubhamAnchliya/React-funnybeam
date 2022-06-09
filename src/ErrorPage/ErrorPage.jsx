import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from "../assets/errorpic.jpg"
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <>
        <div className='errorDiv'>
            <img src={errorPic} width="70%"  height="100%"  alt="error"/>

            <p style={{textAlign:"center"}}>
            <Link to="/">Go to Home </Link>
            </p>

        </div>   
    </>
  )
}

export default ErrorPage;