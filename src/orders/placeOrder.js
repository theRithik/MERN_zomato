import React,{Component} from "react";
import './placOrder.css'

const url="http://3.17.216.66:4000/menuItem"
class PlaceOrder extends Component{
    constructor(props){
        super(props)
        this.state={
            restName:this.props.match.params.restname,
            name:"rithik",
            phone:"6779098765",
            email:"rithik@gmail.com",
            address:"MG Road vijayawada",
            cost:0,
            menuItem:""
        }
    }

    handleChange=(event)=>{
        // const head=this.state.e.target.name
        // const matter= event.target.value
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <>
            <div className="container">
                <div className="panel">
                    <h5 style={{padding:'10px 10px 0 20px'}}>Your Order is from the Restaurant <em>{this.state.restName}</em></h5>
                </div>
                <div style={{width:'63%',marginLeft:'18.6%', border:'1px solid rgb(96, 237, 183)', borderRadius:'0 0 10px 10px'}}>
            < div className="row" style={{paddingBottom:'5%', marginTop:'5%'}}>
                    <div className="col-md-5" style={{marginLeft:'5%'}}>
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-5" style={{marginLeft:'1%'}}>
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-5" style={{marginLeft:'5%'}}>
                        <label>Phone</label>
                        <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-5" style={{marginLeft:'1%'}}>
                        <label>Address</label>
                        <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="row">
                        
                    </div>
                    <h5 style={{marginTop:'2%', marginLeft:'5%'}}>Total Price: {this.state.cost}</h5>
                    <button type="submit" className="btn btn-primary" style={{marginTop:'2%', marginLeft:'5%', marginBottom:'5%'}}>Procced</button>

                </div>
                
            </div>
            </>
        )
    }

    componentDidMount(){
        let menuItem =sessionStorage.getItem('menu')
       
        fetch(url,{
            method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:menuItem
            
    })
    .then((res)=>res.json())
    .then((data)=>{
        let totalCost=0;
        data.map((item)=>{   
                totalCost=totalCost+Number(item.menu_price);
                 return 'ok'
            
        })
       this.setState({menuItem:data,cost:totalCost})
    })
    }
}
export default PlaceOrder