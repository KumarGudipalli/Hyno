import React, { useState } from 'react'
import im1 from "../Image 7/Image 7.png"
import slide1 from "../Image 7/Image 6/Image 3.png"
import slide2 from "../Image 7/Image 6/Image 4.png"
import slide3 from "../Image 7/Image 6/Image 5.png"
import slide4 from "../Image 7/Image 6/Image 6.png"
import slide5 from "../Image 7/Image 1.png"
const imgs = [{ img:slide5  },
{ img:slide2   },
{ img: slide1 },
{ img: slide4 },
{ img: slide3 },]
function Mobile() {
    const [mobile, setMobile] = useState(imgs);
console.log(mobile);

    return (
        <div className='ImgContainer'>
          
    <div >
    <p style={{fontSize:"13px"}}>HOME/MOBILES</p>
           {mobile.map((ele)=> {return <div className='MobileImgs'> <img src={ele.img} alt="" /> </div>} )}
    </div>
<div className='CenterImg'>
    <div>
        <img style={{marginLeft:"100px"}} src={im1} alt="" />
    </div>
    <div className='Center_Btns'>
        <button >Add To Cart</button>
        <button>Buy Know</button>
    </div>
    </div>
        </div>
    )
}

export default Mobile