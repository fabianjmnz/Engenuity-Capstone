import React from 'react'
import '../../CSS/Products.css'
import Photo1 from '../../Images/EZ Chart 2.png'
import Photo2 from '../../Images/ez chart 3.png'
import Photo3 from '../../Images/EZ Chart Lite.png'
import Photo4 from '../../Images/EZ Chart no background.png'
import Photo5 from '../../Images/Small Pelican Case.png'


function chart(){
  return(
    <>
      <h1 className="title">EZ Chart</h1>
      <div className="scroll-pictures">
        <ul className="list">
        <img src={Photo1}/>
        <img src={Photo2}/>
        <img src={Photo3}/>
        <img src={Photo4}/>
        <img src={Photo5}/>
        <img src="https://via.placeholder.com/250"/>
        <img src="https://via.placeholder.com/250"/>
        </ul>
      </div>
      <div className="product-detail-header">What is EZ Chart?</div>
      <br/>
      <div className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <br/>
      <div className="product-detail-header">How it works:</div>
      <br/>
      <div className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <br/>
      <div className="benefit-header">BENEFITS:</div>
      <p>SAFER</p>
      <p>Pressure range to 20,000 psi</p>
      <p>Robust portable case</p>
      <p>Battery powered</p>
      <p>Saves time</p>
      <p>Easy determination of pass/fail pressure test</p>
      <p>Real time data acquisition</p>
      <p>Custom adapters available</p>
      <p>Zoom in ability to time and pressure</p>
      <p>Ruggedized lightweight notebook</p>
      <p>Quick rig up / connect</p>
      <p>Quick connect interfaces</p>
      
    </>
  )
}
export default chart