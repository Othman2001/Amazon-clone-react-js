import React from 'react'
import "./check.css"
import {useStateValue}  from '../../state/stateProvider'
import SubTotal from '../subTotal/SubTotal';
function CheckProduct({ id, title, image,price,rating}) {
    const [{ basket },dispatch] = useStateValue()  
   const removeBasket = ()=>{
       dispatch({
           type: "REMOVE_FROM_BASKET",
           id:id
           
       })
   }
    return (
        <div className = "checkout_product row">

            <div className = "check_image col-lg-6 ">
            <img src = {image} alt ="product" class = "product__image" />
            </div>
         
            <div className = "check__info col-lg-6 ">
                <p className = "info__title"> {title} </p>
                <p className = "info__price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <div className = "info__rating">
                {
Array(rating).fill().map((i)=>(<span>🌟 </span>))
}
                </div>
                <div className = "remove">
                 <button className = "product_button" onClick = {removeBasket}> Remove Item </button>
                </div>
            </div>
            
            
    
  
        

        </div>
    )
}

export default CheckProduct
