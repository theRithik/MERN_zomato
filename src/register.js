import React from "react";
import './loginStyle.css'


 const url="http://localhost:5000/admin/Register"
const Register =()=>{
    const handleClick=()=>{
const name=document.getElementById('first').value
const email=document.getElementById('secound').value
const password=document.getElementById('third').value
        fetch(url,{
            method:'POST',
             headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
             },
             body:JSON.stringify({
                Name:name,
                Email:email,
                Password:password
             })
            })
             .then((res)=>res.json())
             .then((value)=>{
                console.log(JSON.stringify(value))
                alert(value.token)
                    if(value.status!==200){
               window.location.href='/Register'
               }
               else{
                window.location.href='/login'
                } 
            })
    }
    return(
        <>
         <div className="container1">
    <div className="Login-border">
    <h3 style={{textAlign:'center', color:'white', position:'relative',top:'10%'}}> Register</h3>
        <div className="login" style={{marginTop:'90px'}}>
        <div style={{padding:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" id="person" viewBox="0 0 448 512" style={{fill:'#6A679E'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        <input type="text" id='first' placeholder="Name" name='Name' className="login_input" required/> <br/><br/>
        <svg xmlns="http://www.w3.org/2000/svg" id="person" height="1em" viewBox="0 0 512 512" style={{fill:'#6A679E'}}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <input type="email" id='secound' placeholder="UserName/Email" name='Email' style={{marginLeft:'0'}} className="login_input" required/>
       <br/><br/>
       <svg xmlns="http://www.w3.org/2000/svg" id="person" height="1em" viewBox="0 0 448 512" style={{fill:'#6A679E'}}><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
        <input type='password' id='third' placeholder="Password" className="login_input" name="Password" style={{marginBottom:'20px'}} required/>
        </div>
        </div>
   <button className="login-submit" onClick={handleClick}><span>Register Now</span></button>
    <div className="login-background">
        <span className="login-background1"></span>
    </div>
    </div>
    </div>
        </>
    )
}
export default Register