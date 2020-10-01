import React from 'react'
import { useStateValue } from '../../state/stateProvider'
import  CheckProduct from '../checkout/CheckProduct'
import './check.css'
import SubTotal from '../subTotal/SubTotal'
import CurrencyFormat from 'react-currency-format'
function CheckOut() {
    const[{basket}] = useStateValue()
    return (
        <div className = "check">
          
        <div>

            {basket?.length ===0 ?(
                <div>
                  <h2>Your Shopping cart is empty</h2>
                    </div>
            ):(
                <div className = "check__cart"> 
                <h2> Your Shopping Cart </h2>
                {
                    basket.map(item => (
                        < CheckProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))
                }
                     </div>
            )
            }
        </div>

        {
            basket.length > 0 && (
                <div className = "check_right">
                    <SubTotal  />    </div>
            )
        }
        </div>
    )
}

export default CheckOut
