import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home'
import  Detailes from './components/products/Detailes'
//react router dom
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Header from './components/header/Header'
import CheckOut from './components/checkout/CheckOut';
import Login from './components/login/Login'
import {useStateValue} from './state/stateProvider'
import {auth} from 'firebase'
import firebaseapp from './components/login/firebase'

function App() { 
const [{basket}, dispatch] = useStateValue()
const [{user}] = useStateValue()
// code run based on given condtion 
useEffect(()=>{
   const unsubscribe= firebaseapp.auth().onAuthStateChanged((authUser)=>{
    if(authUser){
      //the user us logged in
      dispatch({
        type: "SET_USER",
        user: authUser
      })
    }else{
      dispatch({
        type: "SET_USER",
        user:null
      })
    }
  })
  console.log("user is " ,user?.email)
  return()=> {
    //any clen up happens here
    unsubscribe()
  }

},[])

  return (
  <Router>
 <div className="App">
   <Switch>
     <Route path = "/checkout">
 
       <Header />
       <CheckOut />
     </Route>
     <Route path = "/login">
     <Header />
     <Login />
   
     
     </Route>
     <Route path = "/product/:id" >
      <Detailes />
     </Route>
     <Route path = "/" >
       <Header />
      <Home />
     </Route>
   </Switch >
     
     </div>
    </Router>

  );
}

export default App;
