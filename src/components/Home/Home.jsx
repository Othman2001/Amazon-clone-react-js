import React from 'react'
import Header from '../header/Header'
import Product from '../products/Product'
 import Slider from '../slider/slider'
import './home.css'

function Home() {
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

     
 
      <Product id = "213213321"
                 title = "HP 63 | Ink Cartridge | Black | F6U62AN"
                 price = {11,96}
                 rating ={5}
                 image = "https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US160_.jpg"
               />     
           <Product id = "213213321"
                 title = "Roku Premiere | HD/4K/HDR Streaming Media Player, Simple Remote and Premium HDMI Cable"
                 price = {39}
                 rating ={5}
                 image = "https://images-na.ssl-images-amazon.com/images/I/41LREmVhIGL._AC_US160_.jpg"
               />     
               <Product id = "213213321"
                 title = "TP-Link AC1750 Smart WiFi Router -  , Parental Control&QoS (Archer A7)"
                 price = {62}
                 rating ={2}
                 image = "https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US160_.jpg"
               />     
                <Product id = "213213321"
                 title = "AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                 price = {294}
                 rating ={3}
                 image = "https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
               />     
       </div>
      </div>
     
  
    )
}

export default Home
