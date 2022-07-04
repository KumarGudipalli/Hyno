import { width } from '@mui/system'
import React from 'react'
import love from "../Image 7/path.png"
import cart from "../Image 7/Group 9934.png"
import serch from '../Image 7/Group 10004.png'
import cros from "../Image 7/Group 10006.png"
import ico from "../Image 7/Group 10515.png"
import arr from "../Image 7/arrow.png"
function NavBar() {
  return (
    <div>
      <div className='Top_Navbar'>
        <div className='wish'>
          <p>WISHLIST </p>
          <img style={{height:"18px" , width:"18px"}}src={love} alt="" />
           
        </div>
        <div className='wish'>
          <p>CART</p>
          <img style={{height:"20px" , width:"20px"}}src={cart} alt="" />
        </div>
        <div className='user'>
        <img style={{height:"15px" , width:"15px"}}src={ico} alt="" />
          <p>Kumar Gudipalli</p>
          <img style={{height:"15px" , width:"15px"}}src={arr} alt="" />
        </div>
      </div>
    <div className='MainNavBAr'>
        <div>
          <h2 className='Logo'>     KRAYA </h2>
        
        </div>
        <div className='NavBar_Items'>
            <li>Phone</li>
            <li>Television</li>
            <li>Refrigerator</li>
            <li>Laptop</li>
            <li> washing Machine</li>
            <li>Dowloads</li>
        </div>
        <div className='NavBar_Input'>
          <img style={{width:"20px", height:"20px"}} src={serch} alt="" />
            <input className='InputBox' type="text" placeholder='search for products' />
            <img  style={{width:"20px", height:"20px"}}  src={cros } alt="" />
        </div>
    </div>
    </div>
  )
}

export default NavBar