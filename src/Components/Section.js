import React from "react";
import Card from "./Card";
import { Productinfo } from "./Utils/Constants";

const Section=({cart,setCart})=>{
return(
<React.Fragment>
<div className="section"> 
{Productinfo.map((element,index)=>{
return(<Card{...element}  key={index} cart={cart} setCart={setCart} />)

})}
</div>
</React.Fragment>
)}
export default Section;