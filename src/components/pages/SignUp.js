import React from 'react';
import '../../App.css';


export default function SignUp() {
  return <>
  <div className='sign-up'>
  <h1 >SIGH UP PAGE</h1>
  <form>
    <label>Email</label><br/>
    <input type='email' placeholder='Enter your Email' /><br/>
    <label>Password</label><br/>
    <input type='password' placeholder="Enter your Password" /><br/>
    <input className='submitbtn' type='submit' />
  </form>
  </div>
  </>
}