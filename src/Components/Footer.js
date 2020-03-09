import React from 'react'
import '../CSS/Footer.css'
import Phone from '../Images/Engenuity-phone-num.png'
import Email from '../Images/Engenuity-email.png'

function Footer(){
  return(
    <div id="footer">
      <img id="phone-number" src={Phone}></img>
      <img id="email" src={Email}></img>
    </div>
  )
}
export default Footer