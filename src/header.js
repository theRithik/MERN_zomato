import React from "react";

const Header =()=>{
    return(
        <>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a  href="/" className="navbar-brand">Xomato</a>
    <form className="d-flex">
      <button className="btn btn-outline-success me-3">Login</button>
      <button className="btn btn-danger me-2" >Sign Up</button>
    </form>
  </div>
</nav>
        </>
    )
}
export default Header