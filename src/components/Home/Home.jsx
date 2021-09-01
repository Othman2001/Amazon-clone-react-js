/* eslint-disable no-undef */
import React ,{useEffect,useState} from 'react'
import Product from '../products/Product'
 import Slider from '../slider/slider'
import './home.css'

function Home() {
  const [productData, setProductData] = useState();
  useEffect(()=>{

    const fetchData = async()=>{
    try{
      const result = await fetch('https://fakestoreapi.com/products');
      const body = await result.json();
      setProductData(body)
    }catch(err){
      console.log("error");
    }
    console.log(productData , "Data")

    }
    fetchData()
    console.log(productData , "Data")

    
},[])
console.log(productData , "Data")

    return (
        <div className = "home">
          <div className = "home_slider">
          <Slider />
          </div>
             
          <div className = "home_image">
            <img  className = "home__image"
            src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" />
          </div>
          <div className="home_products">
{
  productData?.map((product)=>{
    return(
      <Product id = {product.id} title= {product.title} rating = {5}image = {product.image}  price = {product.price}/>
    )
  })
}
     
 
       </div>
      </div>
     
  
    )
}

export default Home
