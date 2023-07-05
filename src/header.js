import React from "react";
import {Link} from 'react-router-dom'
import "./header.css"
const Header =()=>{
  const handleMove=()=>{
    document.getElementById("login").style.display="block"
   console.log('clicked')
  
  }
  const handleOut=()=>{
    document.getElementById("login").style.display="none"
  
  }
      return(
          <>
          <nav className="navbar">
    <div className="container-fluid">
      <a  href="/" className="navbar-brand">Xomato</a>
      <form className="d-flex" onMouseEnter={handleMove} onMouseLeave={handleOut}>
      <span><svg xmlns="http://www.w3.org/2000/svg" className="me-5"  height="1.3em" width="1.3em" viewBox="0 0 448 512" style={{fill:'white'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
      </span>
      
      {/* <Link to='/login' className="btn btn-warning me-3">Login</Link>
        <Link to='/register' className="btn btn-light me-3" >Register</Link> */}
      </form>
    </div>
  </nav>
  <div className="loginTab" id='login' onMouseEnter={handleMove} onMouseLeave={handleOut}  >
    <h5 style={{textAlign:'center'}}>User</h5>
  <Link to='/login'> <h6  className="loginTab1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> Login</h6></Link>
  <Link to='/Register'>    <h6 className="loginTab1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg> Register</h6></Link>
      </div>
          </>
    )
}
export default Header