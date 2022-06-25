import React, { useState } from 'react'
import './Order.css'
import { FaStar } from "react-icons/fa";
const Order = ({name,price,partition,rate,list}) => {
  
  console.log(list)
  

  return (
    <div className='order'>
    <h2>My Orders</h2> 
      <button className='check' >CheckOut</button>
        {/*This is my code for rendering the selected item list but,i dont know the why the properties are not rendering*/}
        {list.map((obj)=>{
          <div className='your'>
        <h6>{obj.name}</h6>
        <h6>${price}</h6>
        <h6>{partition}</h6>
        <h6>{rate}</h6>
        </div>
        })}
        <div className='your'>
        <h6>{name}</h6>
        <h6>${price}</h6>
        <h6>{partition}</h6>
        <h6><FaStar/>{rate}</h6>
        </div>
        
        
      
      
    </div>
  )
}

export default Order