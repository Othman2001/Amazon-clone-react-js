import React,{useEffect} from 'react'
import { useStateValue } from '../../state/stateProvider'
import "./product.css"
import {Link} from 'react-router-dom'
import  Detailes from './Detailes'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
function Product({id,image , title , price , rating}) {
  const [{ basket },dispatch] = useStateValue()  
const addToBasket = ()=>{
  dispatch({
    type : 'ADD_TO_BASKET',
    item:{
       id,
       title,
       image,
       price,
       rating
    }
  })
}
const styles = {
  width: "450px"
}
  return (
    <div className = "product">
      <div className="product__image">
    <img src = {image} alt = "product"  className = "product__image"/>
    </div>
           <p> </p>
  
<div className="product__info">
<p>{title}</p>
<p  className = "product__price" style = {styles}> 
Price:
<small>$</small>
<strong> {price}</strong>
</p>
<div className="product__rating">
{
Array(rating).fill().map((i)=>(<span>🌟 </span>))
}
</div>
</div>
<button className = "product_button"
        onClick = {addToBasket}
>Add To Basket </button>





    </div>
    
  )
}

export default Product
