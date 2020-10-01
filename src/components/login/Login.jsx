import React, {useState} from 'react'
import "./login.css"
import {Link , useHistory} from 'react-router-dom'
import  auth  from 'firebase'
import firebaseapp from './firebase'

function Login() {
    // state of the component
  const history = useHistory()
    const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
     //login function
    const login = e => {
        e.preventDefault()
        firebaseapp.auth().signInWithEmailAndPassword(email,password)
        .then((auth)=> {
            //redirect to home page
            history.push("/")
        })
        .catch((e)=> alert(e.message))
    }
    //register function
    const register = e => {
        e.preventDefault()
        firebaseapp.auth().createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
           //create user and logged in .....
           history.push("/")
       }).catch((e)=> alert(e.message))
    }

    return (
        <div className = "login">
          {/* the amazon logo */}
            <Link to ="/">
                
                <img className = "login__logo"
                 
                 src = 
    "https://lh3.googleusercontent.com/proxy/BK5rraPxQgvj5hmm7w5PxN5E33zowhjtJSl-95BH8d_IA_uUkhWm8NCITs5mYTu5DQHs6zB3k83kr-Bwu_g4LmKbXb3Q29UgW_g3J-ghwvdt9mhy8vlp6SRvyIda-XwANCIKVyy8ykgovJ3XoSybTF3aslq5RNo" alt />
            </Link>
            <div className="login__container">
               {/* login form  */}
                <h1>sgin in</h1>
                <form>
                <h5>E-mail </h5>
                <input type ="email" onChange= {event=> setEmail(event.target.value)}
                value = {email} />
                 <h5> password </h5>
                 <input type ="password"  onChange = {event=> setPassword(event.target.value)}
                 value = {password}/>
                 <button 
                 onClick= {login}
                 type = "submit" className = "sign"> Sign In </button>
                </form>

            <p>  By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                 <button 
                 onClick = {register}
                 className = "register">Create Your Amazon Account </button>
            </div>
        </div>
    )
}
export default Login
