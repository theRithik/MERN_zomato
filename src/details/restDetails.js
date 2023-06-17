import React from "react";
import axios from "axios";
import { Component } from "react";
import './restDetails.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MenuDisplay from "./menuDisplay"

const url=" http://3.17.216.66:4000/details/"
const menuUrl="http://3.17.216.66:4000/menu/"
class RestDetails extends Component {
    constructor(){
        super()
        this.state={
            restDeatils:'',
            menuList:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            userMenu:''
        }
    }

    orders=(id)=>{
        this.setState({userMenu:id})
    }


    render(){
        let details= this.state.restDeatils
        return(
            <>
            <div className="container" style={{marginTop:'50px'}}>
                <div className="row">
                    <div className="col-md-6" style={{display:'inline-block'}}>
                        <img src={details.restaurant_thumb} alt={details.restaurant_name} style={{width:'500px',height:'400px', borderRadius:'20px'}} />
                    </div>
                    <div className="col-md-6">
                        <h3 style={{marginBottom:'5px'}}>{details.restaurant_name}</h3>
                        <span className="review">231 Customers Rating Average</span>
                        <h6 className="price">Old price <del style={{color:'red'}}>Rs 800</del></h6>
                        <h5>Offer price <span className="offer">Rs {details.cost}</span></h5> 
                        <h6>Best taste of Fresh Chai with Samosa At your Door and DineIn </h6>
                        <img src='./sanitize.jpg' alt="sanitized" className="sanitize"/>
                        <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{marginTop:'10px'}}>
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Contact</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent" style={{height:'200px'}}>
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">  <h2>{details.restaurant_name}</h2>
                            <p>{details.restaurant_name}  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           </p>
</div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0"> 
                           <h5 style={{paddingTop:'30px'}}> Address: {details.address}</h5>
                            <h6 >Contact: {details.contact_number?details.contact_number:9944556643}</h6></div>
                            
 </div>
 <button className="btn btn-danger"><Link to={`/listing/${this.state.mealId}`}>Back</Link></button>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12">
                    <MenuDisplay restMenu={this.state.menuList}
                    finalOrder={(data)=>{this.orders(data)}}
                  />

                </div>
            </div>
            </>
        )
    }
    // async Await using for api calling
   async componentDidMount(){
        const id= this.props.location.search.split('=')[1]
      const response = await axios(`${url}+${id}`)
      const menuResponse = await axios(`${menuUrl}+${id}`)
     this.setState({restDeatils:response.data[0], menuList:menuResponse.data})
     console.log(this.state.menuList)


        
    }
}
export default RestDetails