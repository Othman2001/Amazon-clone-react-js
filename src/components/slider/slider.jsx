import React,{useState} from 'react'
import "./slider.css"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
function Slider() {
    const [image,setImage] = useState([
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
         "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
         "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
         "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
    
        ])
    const [index , setIndex] = useState(0)
    const slideRight = ()=>{
        setIndex((index +1) % image.length)
    }
    const slideLeft = ()=> {
       const nextIndex = index -1
       if(nextIndex < 0) {
           setIndex(image.length - 1)
       }else{
           setIndex(nextIndex)
       }
    }
    return (
        <div className = "slider">
              <div className="slider_image">
                {image.length > 0 &&    <img src = {image[index]} alt />}
            
            </div>
            <div className="slider_buttons">
            <div className="slider_button_next">
            
            <NavigateNextIcon className = "icon" onClick = {slideRight}/>
           
          </div>
          <div className="slider_button_perv">
          < NavigateBeforeIcon className = "icon" onClick = {slideLeft}  />
          </div>

            </div>
          
          
        </div>
    )
}

export default Slider
