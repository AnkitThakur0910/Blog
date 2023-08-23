import React from 'react'
import './style.css'
import image1 from '../asset/conor-luddy-IVaKksEZmZA-unsplash.jpg'

function Upload() {
  return (
    <div style={{background:"linear-gradient(rgb(41, 40, 40), black 60%)",width:"100%",height:"100%",position : "relative"}}>
      <div className='trape'></div>
        <div className='write-blog'>
         <div className='select-image'>
          <img src={image1} alt='camera' />
          <span style={{fontSize : "2rem", fontWeight : "", color : "white"}}>Select <span style={{fontWeight : "bold",color : "#B8336A",fontSize : "2rem"}}>Image</span> for blog.</span>
          <input id='blog-imag' style={{display : "hide",margin : "0",padding : "0"}} type='file' name='image' alt='im' accept='image/*'></input>
          <label for = 'blog-imag' style={{padding : "1rem 4rem 1rem 4rem", borderRadius : "20px", border : "2px solid white", color : "white", fontSize : "1.3rem",marginTop : "1rem"}}>Select Image</label>
          
         </div>
         <div className='write-title'>
          <input type='text' placeholder='Enter Title'></input>
         </div>
         <div className='write-content'>
          <textarea placeholder='Write Blog'></textarea>
         </div>
         <div className='submit'>
          <button>Upload</button>
         </div>
        </div>
      
    </div>
  )
}

export default Upload