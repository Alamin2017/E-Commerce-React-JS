import React from 'react'
import './CSS/UserLogin.css'
const UserLogin = () => {
  return (
    <div className='userloginsignup'>
      <div className="userloginsignup-container">
        <h1>Sign In</h1>
        <div className="userloginsignup-fields">
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default UserLogin
