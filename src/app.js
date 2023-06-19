import React from 'react'
import { BrowserRouter , Route,} from 'react-router-dom/cjs/react-router-dom.min'
import Home from './home/home'
import Header from './header'
import Footer from './footer'
import ListDisplay from './listing/listDisplay'
import RestDetails from './details/restDetails'
import PlaceOrder from './orders/placeOrder'
const App =()=>{
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route path='/listing/:id' component={ListDisplay}/>
        <Route path='/details' component={RestDetails}/>
        <Route path='/placeOrder/:restname' component={PlaceOrder}/>
        <Footer/>
        </BrowserRouter>
       
        </>
    )
}
export default App