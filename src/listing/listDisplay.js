import React from "react";
import { Component } from "react";
import axios from 'axios'
import './ListDisplay.css'
import ListMenu from './listMenu'

const url="http://localhost:5000/admin/meals?mealtype_id="
class ListDisplay extends Component{
    constructor(){
        super()
        this.state={
            restaurantList:'',
          
        }
    }
    render(){
        return(
            <>
            <div className="conatiner" style={{marginTop:'50px'}}>
                <div className="row">
                    <div className="col-md-3" style={{display:'inline-block'}}>
                        <div className="filter">
                         <h1>filter</h1>
                        </div>
                    </div>
                    <div className="col-8"  >
                    <ListMenu listData= {this.state.restaurantList}/>
                </div>
                </div>
            </div>
            </>
        )
    }
    componentDidMount(){
        const id=this.props.match.params.id
        sessionStorage.setItem('mealId',id);
        axios(`${url}+${id}`)
        .then((res)=>{
            this.setState({restaurantList:res.data})
        })
    }
}
export default ListDisplay