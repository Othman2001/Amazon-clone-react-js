import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format'
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
                 SubTotal ({basket.length} items):<strong> {value} </strong>
             </p>
       
             <button className = "amazon_button">
                 Proceed to CheckOut
             </button>
        </div>
                 </div>
       
   
        </div>
    )
}

export default SubTotal
