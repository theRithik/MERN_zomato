import React,{Component} from "react";
import Display from './quickDisplay'
const url="http://3.17.216.66:4000/quicksearch"
class QuickSearch extends Component{
    constructor(){
        super()
        this.state={
            quick:''
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <Display metaData = {this.state.quick}/>
            </div>
                </>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({quick:data})})
        .catch((err)=>{
            console.log(err)
        })
    }

}
export default QuickSearch