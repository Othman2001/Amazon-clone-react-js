import React  from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../state/stateProvider';
import firebaseapp from '../login/firebase'
function Header() {
  const [{   basket },dispatch] = useStateValue()  
  const [{user}] = useStateValue()
  console.log(basket)
 const login = ()=> {
   if(user){
      firebaseapp.auth().signOut()
   }
 }

  return (
        <nav className = "header">
                 {/*image */}
                 <Link to = "/">  
   <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
   className = "header__logo" alt = "logo" />
                 </Link>
          
        {/*search box */}
        <div className = "header_search">
        <input type = "text" className = "header_searchInput" />
        <SearchIcon className = "header_icon" />
        </div>
         {/*three link */}
         <div className = "header__nav">
             {/* first link */}
             <Link to = {!user && "/login"} className = "header__link">
             <div onClick = {login} className = "header_option">
             <span className = "header_optionLineOne">Hello {user?.email} </span>
  <span className = "  header_optionLineTwo " >{user? 'sgin OUT' : 'sign in'}</span>
             </div>
             </Link>

               {/* first link */}
               <Link to = "/login" className = "header__link">
             <div className = "header_option">
             <span className = "header_optionLineOne" >Retruns</span>
             <span  className =" header_optionLineTwo" >&orders</span>
            
             </div>
             </Link>
               {/* first link */}
               <Link to = "/login" className = "header__link">
             <div className = "header_option">
             <span  className = "header_optionLineOne" >Your</span>
             <span className = "header_optionLineTwo"  >Prime</span>
             </div>
             </Link>
             <Link to = "/checkout" className = "header_link">
                 <div className = "header_basket">
                 <ShoppingBasketIcon className = "basket" />
    <span className = "basket_number" >{basket?.length}</span>
                 </div>
             </Link>
            
         </div>
        </nav> 
    )
}

export default Header
