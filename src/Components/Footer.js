import React from 'react'
import '../CSS/Footer.css'
import Phone from '../Images/Final-phone-number.png'
import Email from '../Images/Final-email.png'
import Address from '../Images/Final-address.png'
import {Breakpoint} from 'react-socks'

function Footer(){
  return(
    <>
    <Breakpoint customQuery="(max-width:800px)">
    <div id="footer">
      <div id="phone-email">
      <img id="phone-mobile" src={Phone}></img>
      <img id="email-mobile" src={Email}></img>
      </div>
      <img id="address-mobile" src={Address}></img>
    </div>
    </Breakpoint>
    <Breakpoint customQuery="(min-width:801px)">
    <div id="footer">
      <img id="phone-number" src={Phone}></img>
      <img id="email" src={Email}></img>
      <img id="address" src={Address}></img>
    </div>
    </Breakpoint>
    </>
  )
}
export default Footer