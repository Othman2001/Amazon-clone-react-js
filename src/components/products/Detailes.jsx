import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useStateValue } from '../../state/stateProvider'
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import "./product.css";
function Detailes() {
 const {id} = useParams();
 const [product , setProduct] = useState();
 const [{ basket },dispatch] = useStateValue()  
 useEffect(() =>{
    const fetchData = async()=>{
        try{
          const result = await fetch(`https://fakestoreapi.com/products/${id}`);
          const body = await result.json();
          setProduct(body)
        }catch(err){
          console.log("error");
        }
    
        }
        fetchData()
 },[])
 const addToBasket = ()=>{
     const {id , title , price , image} = product;
    dispatch({
      type : 'ADD_TO_BASKET',
      item:{
         id,
         title,
         price ,
         image,
         
      }
    })
  }
console.log(product,"product");
    return (
        <div>
            <Header />
            <div class = "container" >
              <div class = "row products-page" >
              <div class = "col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <img src = {product?.image} alt = {product?.title} class = "img-fluid"  />
              </div>
              <div class = "col-lg-4 col-md-12 col-sm-12 col-xs-12" >
                  <div class = "row" >
                      <h3 class = "product-title pt-5" >
                        {product?.title}
                      </h3>
                      <p class  = "product_text "> 

                      {product?.description}

                      </p>
                      
                  </div>
         
              </div>

              <div class = "col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class = "products-data">
                <h4 class = "product-price-page"> {product?.price}  </h4>
                <p class = "text">
                + $394.41 Shipping & Import Fees Deposit to Egypt Details 
                </p>


                <a href = "# " class = "product-location"> Deliver To Egypt </a>
                <h4 class = "stock">
                only 11 avalibale in stock
                </h4>
                  <button type ="button" class = "amazon_button" onClick = {addToBasket}> Add To cart </button>

                  <p class = "text">
                  Secure transaction
Sold by Happy Ranger and Fulfilled by Amazon.
Return policy: Refund or replacement available 
Support: Free Amazon tech support included 
Add a gift receipt for easy returns
                  </p>

                  </div>
              </div>
              </div>
       
            
          </div>
         <Footer/>

        </div>
    )
}

export default Detailes
