import React from "react";
import './loginStyle.css'

 const url="http://localhost:5000/admin/Register"
const Register =(props)=>{
    const handleClick=()=>{
const name=document.getElementById('first').value
const email=document.getElementById('secound').value
const password=document.getElementById('third').value
console.log(email)
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
             .then((res)=>{res.json()})
             .then((data)=>{
                console.log("successfull",data)
                sessionStorage.setItem('token',data.token)
                this.props.history.push('/login')
             })
    

    }
    return(
        <>
        <div className="Login-border">
   
        <div style={{padding:"20px"}}>
            <label className="form-label">
                Name
            </label>
            <input type='text' id='first' className="form-control" name='Name'/>
        <label className="form-label">
            Email
        </label>
        <input type="text" id='secound' className="form-control" name='Email'/>
        <label className="form-label" style={{marginTop:'20px'}}>
            Password
        </label>
        <input type='password' id="third" className="form-control" name='Password' style={{marginBottom:'20px'}}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </div>
        </>
    )
}
export default Register
