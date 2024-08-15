import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import '../styles/signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const url = 'http://localhost:7000/user/signup';

const Signup = () => {
  const [username , setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const nevigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post(url, {
        username,
        email,
        password
      })

      console.log(res.data.message);

      setPopupMessage(res.data.message);
      setPopupVisible(true);

      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      nevigate('/login');
    }catch(err) {
      if (err.response && err.response.data) {
        setPopupMessage(err.response.data.message);
        setUsername('');
        setEmail('');
        setPassword('');  
      } else {
        setPopupMessage("Internal server error...");
      }
      setPopupVisible(true);
    }
  }

  const handleClosePopup = () => {
    setPopupVisible(false);
  }

  return (
    <div className='signup-container'>
      <div className="from-div">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>

      <input type="text" placeholder='Enter Name...' value={username}  onChange={(e)=> setUsername(e.target.value) }  />
      <input type="email" placeholder='Enter Email...'  value={email}  onChange={(e)=> setEmail(e.target.value) } />
      <input type="password" placeholder='Enter Password...' value={password}  onChange={(e)=> setPassword(e.target.value)}  />
      
      <button type='submit'>Signup</button>
      <Link to="/login">Login</Link>
     </form>
      </div>

      {popupVisible && (
        <div className='popup'>
          <h3>{popupMessage}</h3>
          <button onClick={handleClosePopup}><FaWindowClose />
          </button>
        </div>
      )}

    </div>
  )
}

export default Signup
