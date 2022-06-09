import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Users.css";
import axios from 'axios';

const Users = () => {

  const [users, setUsers] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
      console.log("Userlist use_effect");
      loadUsers();
  }, []);

  const loadUsers = async () => {
    const result  = await axios.get("http://localhost:3003/users")
    console.log(result.data);
    setUsers(result.data); 
  }
  

  const deleteUser = async id  =>  {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  }

  const deleteUserList = async () =>  {
    await axios.delete('http://localhost:3003/users/');
    loadUsers();
    navigate("/users");
  }


  return (
    <>
        <Navbar/>

        <div  className='main_div'>

        <h2 className='mt-4 heading'>Users List</h2>

            {/* <Link to="/addUser" className="btn btn-sm btn-success mb-2">Add User</Link> */}

            <div className="edit-btns mb-2">

              <Link
               
               to={'/users/addUser'}
                className="btn btn-primary btn-sm"
                type="button"
              >
                Add Student
              </Link>

              {/* <button
              
                className="btn btn-danger btn-sm m-1" 
                
                onClick={() => deleteUserList()}
                type="button"
              >
                Delete List
              </button> */}

            </div>

            <table className="table table-bordered ">

              <thead>

                <tr className=''>
                  <th >S.No</th>
                  <th >First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact No.</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>



          

            {  
              users.map((user, index)=> (

                <tr  key={index}>
                  <th >{index +1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td className='action_btn'>

                    <Link className="btn btn-success btn-sm "
                    to={"/"} 
                    // to={`/users/${user.id}`}
                    >
                      View
                    </Link>

                    <Link
                      className="btn btn-primary btn-sm "
                    
                      to={`/users/editUser/${user.id}`}
                    >
                      Edit
                    </Link>

                    <Link
                      className="btn btn-danger btn-sm "
                      to="/users"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>

                  </td>
                </tr>
          
              ) )
              
            }
                
        


                {/* <tr>
                  <th >1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td className='action_btn'>
                  <Link className="btn btn-success btn-sm "
                  to={""} 
                  // to={`/users/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm "
                   
                    to={'/editUser'}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger btn-sm "
                    to=""
                    // onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
                </tr> */}

              </tbody>

            </table>
                        

            

        </div>


        <br />

        <Footer/>


    </>
  )
}

export default Users;