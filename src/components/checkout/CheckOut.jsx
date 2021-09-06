import React from 'react'
import { useStateValue } from '../../state/stateProvider'
import  CheckProduct from '../checkout/CheckProduct'
import './check.css'
import SubTotal from '../subTotal/SubTotal'
import Footer from '../Footer/Footer'
function CheckOut() {
    const[{basket}] = useStateValue()
    return (
        <div >
   <div >
          
          <div>
  
              {basket?.length ===0 ?(
                  <div>
                    <h2>Your Shopping cart is empty</h2>
                      </div>
              ):(
                  <div  >
                      <div>
                      <div className = "check__cart  "> 
                  <h2> Your Shopping Cart </h2>
                  {
                      basket.map(item => (
                          <div >
            < CheckProduct
                          id = {item.id}
                          title = {item.title}
                          image = {item.image}
                          price = {item.price}
                          rating = {item.rating}
                          />
                          </div>
              
                      ))
                  }
                       </div>
                      </div>
                  </div>
          
              )
              }
          </div>
  
          {
              basket.length > 0 && (
  
                  <div >
                      <div  className = "">
                      <SubTotal  /> 
                      </div>
                      </div>
              )
          }
          </div>
        {
            basket.length  === 0 ? (
                <div className = "footer-page ">
                <Footer />
      
                </div>
                
            ):(
                <div>
                <Footer/>
            </div>
            )
        }
       
        </div>
     
    )
}

export default CheckOut
