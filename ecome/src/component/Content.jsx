import { Rating } from '@mui/material';
import { green } from '@mui/material/colors';
import React, { useState } from 'react'
const colors = [{ clr: "blue" }, { clr: "black" }, { clr: "grey" }]
function Content() {
    const [color, setColor] = useState(colors)
    const [dis, setDis] = useState("blue")
    const [RAM, setRAM] = useState("4 GB")

    const [store, setStore] = useState("32 GB")
    const handleCLick = (e) => {
        setDis(e)
    }

    const handleChangeb1 = () => {
        setStore("64 GB")
    }
    const handleChangeb2 = () => {
        setStore("128 GB")
    }

    const clickGb1 = () => {
        setRAM("2 GB")
    }
    const clickGB2 = () => {
        setRAM("4 GB")
    }
    return (
        <div>
            <p >Product Code 0DE349879</p>
            <h2 style={{ size:"24px" ,opacity:"1", font:"normal normal 600 14px/24px Work Sans"}}>Honor 8 Pro (Midnight Black, 128GB) <br/>(6Gb RAM) </h2>
            <Rating name="read-only" value="4" readOnly />
            <div className='Price'>
                <h2>$99.99</h2>
                <li>$149.99</li>
                <h4>30% off</h4>
            </div>
            <div>
                <p>color: {dis}</p>
                <div className='ColorBalls'>{color.map((cl) => {
                    return <div onClick={() => handleCLick(cl.clr)} style={{ backgroundColor: cl.clr, width: "50px", height: "50px", borderRadius: "50px" }}></div>
                })}</div>
            </div>
            <div className='Product_Store'>
                <div >
                    <p>Storage: {store}</p>
                    <div className='Store'>
                        <button onClick={handleChangeb1} className='Store-Btns'> 64 GB</button>
                        <button onClick={handleChangeb2} className='Store-Btns'>128 GB</button>
                    </div>
                </div>

                <div>
                    <p>RAM: {RAM}</p>
                    <div className='Store'>
                        <button onClick={clickGb1} className='Store-Btns'>2 GB </button>
                        <button onClick={clickGB2} className='Store-Btns' > 4 GB</button>
                    </div>
                </div>
            </div>
            <div>
                <h3>+ PRODUCT DETAILS</h3>
            </div>
        </div>
    )
}

export default Content