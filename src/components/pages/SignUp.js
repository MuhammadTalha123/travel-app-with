import React from 'react';
import '../../App.css';


export default function SignUp() {

  

function onSubmit() {
  alert("hello");
}

  return <>
  <div className='sign-up'>
  <h1 >SIGN UP PAGE</h1>
  <form>
  <label>Name</label><br/>
  <input type='text' placeholder='Enter your Name' /><br/>
    <label>Email</label><br/>
    <input type='email' placeholder='Enter your Email' /><br/>
    <label>Password</label><br/>
    <input type='password' placeholder="Enter your Password" /><br/>
    <input className='submitbtn' type='submit' onClick={onSubmit} />
  </form>
  </div>
  </>
}