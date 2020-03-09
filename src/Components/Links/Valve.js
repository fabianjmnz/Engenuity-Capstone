import React from 'react'
import '../../CSS/Products.css'

function valve(){
  return(
    <div>
      <h1 className="title">EZ Valve</h1>
      <div className="scroll-pictures">
        <ul className="list">
        <img src="https://via.placeholder.com/250"/>
        <img src="https://via.placeholder.com/250"/>
        <img src="https://via.placeholder.com/250"/>
        <img src="https://via.placeholder.com/250"/>
        <img src="https://via.placeholder.com/250"/>
        <img src="https://via.placeholder.com/250"/>
        </ul>
      </div>
      <div className="product-detail-header">What is EZ Valve?</div>
      <br/>
      <div className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <br/>
      <div className="product-detail-header">How it works:</div>
      <br/>
      <div className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <br/>
      <div className="benefit-header">BENEFITS:</div>
      <p>Less time in between tests</p>
      <p>Streamlines process</p>
      <p>Ensures valves are configured properly</p>
      <p>Quick and easy deployment</p>
      
    </div>
  )
}
export default valve