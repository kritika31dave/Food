import React, { useState } from 'react'
import "./Menu.css";
import cab from './cab.jpg'
import nood from './nood.jpg'
import  veg from './veg.jpg'
import  sea from'./sea.jpg'
import  bean from './bean.jpg'
import  stew from'./stew.jpg'
import  chick from './chick.jpg'
import pot from './pot.jpg'
import { FaRegHeart,FaStar } from "react-icons/fa";
import Order from './Order'
const foodItems=[
  {
    rate:4.2,
    name:"Cabage salad",
    price:4.9,
    id:0,
    src:cab,
    partition:"200gm"
  },
  {
    rate:4.0,
    name:"Noodle salad",
    price:6.3,
    id:1,
    src:nood,
    partition:"250gm"
  },{
    rate:3.2,
    name:"Vegetable salad",
    price:6.9,
    id:2,
    src:veg,
    partition:"300gm"
  },
  {
    rate:3.4,
    name:"Bean Soup",
    price:5.18,
    id:3,
    src:bean,
    partition:"280gm"
  },
  {
    rate:5.0,
    name:"Stewed Vegetables",
    price:7.18,
    id:4,
    src:stew,
    partition:"170gm"
  },
  {
    rate:4.6,
    name:"SeaFood Soupu",
    price:7.22,
    id:5,
    src:sea,
    partition:"190gm"
  },
  {
    rate:4.4,
    name:"Chicken Soup",
    price:5.18,
    id:6,
    src:chick,
    partition:"280gm"
  }, 
  {
    rate:3.2,
    name:"Roasted Potatoe",
    price:5.65,
    id:7,
    src:pot,
    partition:"260gm"
  }
 

  
]  
const selectArray=[]   
function Menu() {
  const [list,setList]=useState(selectArray)
  const [order,setOrder]=useState({name:'',price:0,rate:0,partition:" "})
  const handleOrder=(item)=>{
  for(var i=0; i<foodItems.length-1; i++) {
   if(item === i){
    var name=foodItems[i].name
    var price=foodItems[i].price
    var rate=foodItems[i].rate
    var partition=foodItems[i].partition
    setOrder({name,price,rate,partition})
    selectArray.push({name,price,rate,partition})
    setList(selectArray)
  }
}
}

  return (
    <div className='main'>
    <div className='menu'>
      <div className='side'>
        <div>Menu</div>
      </div>
      <div className='item'>
        {
          foodItems.map((item)=> <>
            <button className='butt' key={item.id} onClick={()=>handleOrder(item.id)}>
            <div className='sec'>
             <div className='rate'><FaStar/>{item.rate}</div>
             <div className='heart'><FaRegHeart/></div>
            </div>
              <div className="photo">
              <img src={item.src} alt="dish"/>
              </div>
              <div className='food'>
                <h3>{item.name}</h3>
              <div className='price'>
              <h2>${item.price}</h2>
              <div className='partition'>{item.partition}</div>
              </div>
              </div>
            </button>
          </>)
        }
      </div>
    </div>
    <Order name={order.name} price={order.price} rate={order.rate} partition={order.partition}  list={list}/>
    </div>
    
  );
}

export default Menu;