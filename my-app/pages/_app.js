import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'



function MyApp({ Component, pageProps }) {
  useEffect(()=>{
  
  //   return()=>{
  //     secound
  //   }
  },[])
  const[reloadKey,setReloadKey]=useState(1)
  const[cart,setcart]=useState([]) //we ca make it a object to then we have to push the id also in the data set or we have to generate the id
  const addToCart=(item,qty,price)=>{
    let newCart = cart
    for(let index=0;index<qty;index++){
      newCart.push([item,price])       
      
    }
    // console.log("Add to cart", newCart)

    setcart(newCart);
    setReloadKey(Math.random());
  }
  const removeToCart=(item,qty)=>{
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setcart(newCart)
  }
  const clearToCart=(item)=>{
    setcart([])
  }
  return<><Navbar key={reloadKey} cart={cart}/><Component cart={cart} removeToCart={removeToCart}
  addToCart={addToCart} clearToCart={clearToCart} {...pageProps}  /><Footer /></> 
}

export default MyApp
