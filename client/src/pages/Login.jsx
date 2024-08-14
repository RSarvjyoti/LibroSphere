import React from 'react'
import '../styles/login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className="from-div">
      <h2>Login</h2>
      <form>
      <input type="text" placeholder='Enter Email...' />
      <input type="text" placeholder='Enter Password...' />
      <button>Signup</button>
     </form>
      </div>
    </div>
  )
}

export default Login
