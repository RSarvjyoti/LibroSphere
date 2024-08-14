import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

const Navbar = () => {
    
  return (
    <>
    <div className="nav container">
        <div className='logo'> <Link to= "/" ><h3> <span>L</span>ibro<span>S</span>phere</h3></Link> </div>
        <div className="links">
            <div><Link to="/store">Store</Link></div>
            <div> <Link to="/">Home</Link></div>
            <div><Link to="/board">Borad</Link></div>
        </div>
        <div className='group-btn'>
            <button className='signup'><Link to="/signup">Signup</Link></button>
            <button className='login'><Link to="/login">Login</Link></button>
        </div>
    </div>
    </>
  )
}

export default Navbar
