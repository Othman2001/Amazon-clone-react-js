import React from 'react';
import "./footer.css"
import {Row,Col , Container} from "react-bootstrap";


const Footer = ()=> {
const footerItems  = [
    {
    title : "information",
     items: ["the brand" , "local Stores" , "Customer Services" , "Privacy and Cookies" , "site map"]
} ,
    {
        title: "Why Buy From Us",
        items: ["Shooping and Returns" , "Secure Shopping" , "Testimoinals" , "Award Winning" , "Ethical Trading"]
    },
    {
        title: "Your Account",
        items: ["Sign In" , "Register" , "View Cart" , "View Your LookBook" , "Track On Order" , "Update Information"]
    }

]
    return(
        <div className="d-flex flex-column " >
            <footer className="pb-5 footer pt-5 " >
                <Container>
                <Row>
             {
                 footerItems.map((foot)=> {
                     return(
                         <Col className="lg-4">
                             <h3> {foot.title} </h3>
                               {foot.items.map((item)=>{
                               return( <h4> {item } </h4>)
                             })}
                         </Col>)}) }
         </Row>
                </Container>
 
            </footer>
        </div>)}
export  default Footer
