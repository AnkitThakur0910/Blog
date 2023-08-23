import React from 'react'
import imag1 from '../asset/beach-1236581_1920.jpg'
import imag2 from '../asset/maldives-1993704_1920.jpg'
import imag3 from '../asset/sunrise-1014712_1920.jpg'
// import { LoremIpsum } from 'react-lorem-ipsum';

import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Readblog() {

  return (
    <div style={{background:"linear-gradient(rgb(41, 40, 40), black 60%)",width:"100%",height:"100%",position : "relative"}} className=''>
        <div style={{position : "absolute",display : "flex",flexDirection : "column",padding : "1rem",top : "36vh", right : "2%",gap : "20px",borderRadius : "20px",backgroundColor : "#242a4a51"}}>
          <div><i className="fa fa-user" style={{color : "#B8336A"}}></i></div>
          <div><i className="fa fa-search" style={{color : "white"}}></i></div>
          <div><i className="fa fa-upload" style={{color : "white"}}></i></div>
          <div><i className="fa fa-gear" style={{color : "white"}}></i></div>
        </div>
        
    <div className='trape'></div>
    <div style={{display : "flex",justifyContent : "center", alignItems : "center"}}>
    <div style={{display : "flex", justifyContent : "center", alignItems : "center",border : "2px solid",borderLeftColor : "white",borderTopColor : "white",borderRightColor : "white",borderBottomColor : "white",height : "180px", width : "180px", transform : "rotate(-45deg)",marginTop : "3rem", marginLeft : "4rem" }}>
    <div style={{display : "flex", justifyContent : "center", alignItems : "center", color : "#B8336A", fontFamily : " 'Hind', sans-serif", fontSize : "2.3rem", fontWeight : "bold", wordSpacing : "1rem",transform : "rotate(45deg)"}}>
        <span><span style={{color : "white"}}>My</span> Blogs </span>
        {/* <span style={{color:'rgba(255,255,255,0.2)',fontSize:"2.4rem", position:"absolute"}}>My Blogs </span> */}
    </div>
    </div>
    </div>
    <div className='blog'>
        <div className='blogs elev'>
      <img src={imag1} alt='imag-1'  />
      <span style={{color : "white", display : "flex", alignItems :"center", gap : "10px"}}><i className='fa fa-circle' style={{fontSize : "10px"}}></i>My work</span>
      </div>
      <div className='blogs elev'>
      <img src={imag2} alt='imag-2' />
      </div>
      <div className='blogs elev'>
      <img src={imag3} alt='imag-3' />
      </div>
      <div className='blogs elev'>
      <img src={imag1} alt='imag-4' />
      </div>
      <div className='blogs elev'>
      <img src={imag1} alt='imag-5' />
      </div>
      <div className='blogs elev'>
      <img src={imag1} alt='imag-6' />
      </div>
      <div className='blogs elev'>
      <img src={imag1} alt='imag-7' />
      </div>
    </div>
   </div>
  )
}

export default Readblog