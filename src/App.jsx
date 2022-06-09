import React from 'react';
import { Routes , Route } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import Service from './Service/Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from './Users/Users';
import AddUser from './Users/AddUser/AddUser';

import EditUser from './Users/EditUser/EditUser';

const App = () => {
  return (
    <>


      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/home' element={<Home/>} />

        <Route path='/about' element={<About/>} />

        <Route path='/service' element={<Service/>} />

        <Route  path='/users' element={<Users/>} />

        <Route path='/users/addUser' element={<AddUser/>} />

        <Route path='/users/editUser/:id' element={<EditUser/>} />     

        <Route path='/contact' element={<Contact/>} />

        <Route  path='*' element={<ErrorPage />} />

        
      </Routes>

    </>
  )
}

export default App;