import React,{Component} from "react";

const url="http://3.17.216.66:4000/location"
const rurl="http://3.17.216.66:4000/restaurant?stateId="
class Search extends Component{
    constructor(){
        super()
        this.state={
            city:"",
            rest:""
        }
    }

    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
              return(
                  <option value={item.state_id} key={item.state_id}>{item.state}</option>
              )
                })
        }
    }

    renderLocation=(data)=>{
if(data){
    return data.map((item)=>{
        return(
            <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} || {item.address} </option>
        )
    })
}
    }

    handleChange=(e)=>{
        const state_id = e.target.value
        fetch(`${rurl}+${state_id}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({rest:data})})
    }
    render(){
        return(
            <>
            <div className="container" style={{margin:'50px'}}>
                <h1 style={{textAlign:'center'}}>Xomato</h1>
                <div className="row">
                <div className="col-md-4" style={{marginLeft:'170px'}}>
            <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'} onChange={this.handleChange}>
              <option value="DEFAULT">select a city</option>
             {this.renderCity(this.state.city)}
              </select>
              </div>
              <div className="col-md-4">
          <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
              <option value="DEFAULT">select a restaurant</option>
             {this.renderLocation(this.state.rest)}
              </select>
              </div>
              </div>
              </div>
            </>
        )
    }

componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{this.setState({city:data})})
    .catch((err)=>{
        console.log(err)
    })
}

}
export default Search