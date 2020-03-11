import React from 'react'
import '../../CSS/Products.css'

function vision(){
  return(
    <div>
      <section className="block">
        <h1 className="title">EZ Vision</h1>
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
      </section>

    <section className="block">
      <div className="product-detail-header">What is EZ Vision?</div>
      <br/>
      <div className="detail">An advanced acoustic leak location system. EZ Vision is a module of the BOPX V2 software solution. EZ Vision utilizes the same clamping technology as EZ Valve which allows the sensor to be a simple hardware add-on. This system provides fast, reliable, and safe feedback to determine leaks in test line ups. </div>   
    </section>
      



    <section className="block">
      <div className="benefit-header">BENEFITS:</div>
      <p>Identifies Multiple leaks simultaneously</p>
      <p>Locates leaks even lower than 500psi</p>
      <p>Mitigates at Heights Exposure, Hands on Safety Risk and exposure to Pressure Zones</p>
      <p>Improvement opportunity of Time Between Pressure Test (TBPT)</p>
      <p>Retrofit and requires no modification to OEM Valve</p>
      <p>Filters Rig Noise</p>
      <p>Integrates directly with EZ Chart</p>
      
    </section>
      
    </div>
  )
}
export default vision