import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import { useState } from 'react';



function App() {
  const [cart,setCart]=useState(0)
  return (
    <div className="App">
    <Nav cart={cart} setCart={setCart}/>
    <Header/>    
    <Section cart={cart} setCart={setCart}/>
    <Footer/>      
    </div>
  );
}

export default App;
