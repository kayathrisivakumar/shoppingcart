import React from "react";

const Nav=({cart})=>{
return(    
<React.Fragment>
<div className="navstyle">
    <div className="navleft"> 
        <span><b>Welcome</b></span>
        <span>Home</span>
        <span>About</span>
         
        <div className="dropdown">Shop
    <div className="dropdownlist">
        <div>All products</div>
        <div>Popular</div>
        <div>New arrival</div>
    </div>  
    </div>            
    </div>    
    <div className="cartstyle">🛒 Cart {cart}</div>
</div>
</React.Fragment>
)}
export default Nav;