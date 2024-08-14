import React from 'react';
import '../styles/signup.css';

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className="from-div">
      <h2>Create Account</h2>
      <form>
      <input type="text" placeholder='Enter Name...'/>
      <input type="text" placeholder='Enter Email...' />
      <input type="text" placeholder='Enter Password...' />
      <button>Signup</button>
     </form>
      </div>
    </div>
  )
}

export default Signup
