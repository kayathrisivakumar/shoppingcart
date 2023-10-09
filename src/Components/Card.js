import React from "react";
import { useState } from "react";


const Card=({image, Name, cost,cart,setCart})=>{
const [btnText,setBtnText]=useState("Add to Cart")
return(
<React.Fragment>
<div className="cardstyle">
    <img src={image} alt="bag image"/>
    
    <div><h2>{Name}</h2></div>
    <div>{cost}</div>
    <button onClick={()=>{    
    btnText=="Add to Cart"?setBtnText("Remove from Cart"):setBtnText("Add to Cart") 
    btnText=="Add to Cart"?setCart(cart+1):setCart(cart-1)   
    }}>{btnText}</button> 
</div>
</React.Fragment>
)}
export default Card;