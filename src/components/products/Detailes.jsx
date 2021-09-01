import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useStateValue } from '../../state/stateProvider'
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
              <div class = "row" >
              <div class = "col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <img src = {product?.image} alt = {product?.title} class = "img-fluid"  />
              </div>
              <div class = "col-lg-6 col-md-12 col-sm-12 col-xs-12" >
                  <div class = "row" >
                      <p class  = "product_text "> 
                      {product?.description}

                      </p>
                      
                  </div>
                  <div class = "row" >
                  <div class = "products-data">
                  <button type ="button" class = "btn btn-primary amazon_button" onClick = {addToBasket}> Add To cart </button>
                  </div>
    
                  </div>
                
              </div>
              </div>
       
            
          </div>
         

        </div>
    )
}

export default Detailes
