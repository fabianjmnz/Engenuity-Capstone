import React from 'react'
import '../../CSS/Products.css'

function test(){
  return(
    <>

<section className="block">
  
      <h1 className="title">EZ Test</h1>
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
      <div className="product-detail-header">What is EZ Test?</div>
      <br/>
      <div className="detail">A fully automated pressure testing system capable of providing unparallel accuracy, speed, and repeatability. In conjunction with other BOPX V2 technologies can provide fully automated verifiable BOP Test. EZ Test provides a stable and reliable pressure curve. This helps to eliminate over pressurizations with small volumes and stabilizes the test for faster results. EZ Test is configurable to multiple test environments both offshore and onshore.</div>
</section>

<section className="block">
      <div className="benefit-header">FEATURES:</div>
      <p>Automated Pressure Testing with constant pressure and variable volume removing the pressure decay test method</p>
      <p>Linear press pump with constant pressure that addresses temperature change and apparent compressibility of fluids</p>
      <p>Potential opportunity for deviation from 5-minute hold</p>
      <p>Less reliance on human determination of pass/fail</p>
      <p>Less reliance on human manipulation of pumps and pressure control</p>
      <p>Incresased Safety and Efficiency</p>
      <p>KPI tracking and efficiency of Time to Pressure Test (TPT) and Time Between Pressure Test (TBPT)</p>
     
</section>
      
    </>
  )
}
export default test