import React from "react";
import './loginStyle.css'

const url='http://localhost:5000/admin/Login'
const Login =()=>{

 const handleClick=()=>{
        const email = document.getElementById('frstName').value
        const password = document.getElementById('secPass').value
        fetch(url,{
            method:'POST',
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Email:email,
                Password:password
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            sessionStorage.setItem('Token',data.token)
            console.log(data)
           
        })
        .catch((e)=>{
            console.log(e)
        })
        
    }
return(
    <>
    <div className="container1">
    <div className="Login-border">
    <h3 style={{textAlign:'center', color:'white', position:'relative',top:'10%'}}> Login</h3>
        <div className="login">
       
        <div style={{padding:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" id="person" height="1em" viewBox="0 0 448 512" style={{fill:'#6A679E'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        <input type="email" id='frstName' placeholder="UserName/Email" name='Email' className="login_input"/>
       <br/><br/>
       <svg xmlns="http://www.w3.org/2000/svg" id="person" height="1em" viewBox="0 0 448 512" style={{fill:'#6A679E'}}><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
        <input type='password' id='secPass' placeholder="Password" className="login_input" name="Password" style={{marginBottom:'20px'}}/>
        </div>
        </div>
   <button className="login-submit" onClick={handleClick}><span>log in now</span></button>
    <div className="login-background">
        <span className="login-background1"></span>
    </div>
    </div>
    </div>
    </>
)    
}
export default Login