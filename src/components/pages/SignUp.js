import React, { useState } from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Car1 from '../../images/car1.jpg';
import Car2 from '../../images/car2.jpg';
import Car3 from '../../images/car3.jpg';
import Car4 from '../../images/car4.jpg';
import Car5 from '../../images/car5.jpg';


export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function namefun(e) {
    setName(e.target.value);
  }

  function emailfun(e) {
    setEmail(e.target.value);
  }

  function passfun(e) {
    setPass(e.target.value);
  }

function onSubmit() {
  alert("WellCome " + name + " Your Email is " + email + " And Password is " + pass);
}

  return <>
  <div className='sign-up'>
  <h1 >SIGN UP PAGE</h1>
  <form>
  <label className="sign_up_label">Name</label><br/>
  <input className="sign_up_input" type='text' onChange={namefun} placeholder='Enter your Name' /><br/>
    <label>Email</label><br/>
    <input className="sign_up_input" type='email' onChange={emailfun} placeholder='Enter your Email' /><br/>
    <label>Password</label><br/>
    <input className="sign_up_input" type='password' onChange={passfun} placeholder="Enter your Password" /><br/>
    <input className='submitbtn' type='submit' onClick={onSubmit} />
  </form>
  </div>
  </>
}