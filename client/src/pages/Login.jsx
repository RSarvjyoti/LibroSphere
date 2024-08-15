// import React, { useState } from 'react'
// import '../styles/login.css'
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaWindowClose } from "react-icons/fa";

// const url = 'http://localhost:7000/user/login';
// // const logout_url = "http://localhost:7000/user/logout";

// const Login = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const nevigate = useNavigate();
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handleSubmit = async (e)=> {
//     e.preventDefault();

//     try{
//       const res = await axios.post(url, {
//         email,
//         password
//       })
//       const token = res.data.token;

//       localStorage.setItem("token", token)
    
//       setEmail('');
//       setPassword('');
//       nevigate('/')

//     }catch(err) {
//       if (err.response && err.response.data) {
//         setPopupMessage(err.response.data.message || "Invalid email or password");
//       } else {
//         setPopupMessage("Internal server error...");
//       }
//       setPopupVisible(true);
//       setEmail('');
//       setPassword('');

//     }

//   }

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//   }

//   return (
//     <div className='login-container'>
//       <div className="from-div">
//       <h2>Login</h2>
//       <form  onSubmit={handleSubmit}>
//       <input type="email" placeholder='Enter Email...' value={email} onChange={(e) => setEmail(e.target.value)}  />
//       <input type="password" placeholder='Enter Password...' value={password} onChange={(e) => setPassword(e.target.value) }/>
//       <button type='submit'>Login</button>
//       <Link to="/signup">Signup</Link>
//      </form>

//      {popupVisible && (
//         <div className='popup'>
//           <h3>{popupMessage}</h3>
//           <button onClick={handleClosePopup}><FaWindowClose />
//           </button>
//         </div>
//       )}

//       </div>
//     </div>
//   )
// }

// export default Login


import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWindowClose } from "react-icons/fa";
import { AuthContext } from '../utils/AuthContext';

const url = 'http://localhost:7000/user/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, { email, password });
      const token = res.data.token;

      localStorage.setItem('token', token);
      login();  
      
      setEmail('');
      setPassword('');
      navigate('/');

    } catch (err) {
      if (err.response && err.response.data) {
        setPopupMessage(err.response.data.message || "Invalid email or password");
      } else {
        setPopupMessage("Internal server error...");
      }
      setPopupVisible(true);
      setEmail('');
      setPassword('');
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='login-container'>
      <div className="login-div">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Enter Password...' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Login</button>
          <Link to="/signup">Signup</Link>
        </form>

        {popupVisible && (
          <div className='popup'>
            <h3>{popupMessage}</h3>
            <button onClick={handleClosePopup}><FaWindowClose /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
