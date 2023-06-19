import React from "react";
import "./header.css"
const Header =()=>{
    return(
        <>
        <nav className="navbar">
  <div className="container-fluid">
    <a  href="/" className="navbar-brand">Xomato</a>
    <form className="d-flex">
      <button className="btn btn-warning me-3">Login</button>
      <button className="btn btn-light me-3" >Register</button>
    </form>
  </div>
</nav>
        </>
    )
}
export default Header