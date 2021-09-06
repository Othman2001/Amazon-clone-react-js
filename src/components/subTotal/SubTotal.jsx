import React from 'react'
import './Total.css'
import { useStateValue } from '../../state/stateProvider'
import {getBasketTotal} from '../../state/reducer'
function SubTotal() {
  const [{basket}, dispatch] = useStateValue()
  const value = getBasketTotal(basket)
    return (
    
        <div className = "subtotal">
                             <div>
                      <div className = "total">
        <p>
                 SubTotal ({basket.length} items):<strong className = "product-price-page"> {value} </strong>
             </p>
             <p class = "text">
                + $394.41 Shipping & Import Fees Deposit to Egypt Details 
                </p>


                <a href = "# " class = "product-location"> Deliver To Egypt </a>
           
             
                  <p class = "text line">
                  Secure transaction
Sold by Happy Ranger and Fulfilled by Amazon.
Return policy: Refund or replacement available 
Support: Free Amazon tech support included 
Add a gift receipt for easy returns
                  </p>
      
        </div>
                 </div>
       
   
        </div>
    )
}

export default SubTotal
