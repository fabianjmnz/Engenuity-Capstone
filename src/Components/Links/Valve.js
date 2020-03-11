import React from 'react'
import '../../CSS/Products.css'

function valve(){
  return(
    <>

<section className="block">
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
</section>


<section className="block">
      <div className="product-detail-header">What is EZ Valve?</div>
      <br/>
      <div className="detail">An automated valve alignment system that opens and closes valves with a push of a button. When utilized in conjunction with our EZ Chart / EZ Test software, EZ Valve will open and close the valves to a user definable configuration ensuring proper valve alignment. The system consists of a retrofitted valve actuators are hydraulic controlled and features two independent means of allowing for manual operations should the need arise. The system can be configured for operation and tailored to best fit our customer applications. Configurations include utilizing rig hydraulics or a standalone hydraulic skid, control module, and can be controlled via our BOPX EZ Chart / EZ Test systems.</div>
</section>


<section className="block">
      <div className="benefit-header">BENEFITS:</div>
      <p>Automated valve actuation and performs lineups in under a minute</p>
      <p>Live confirmation of Valve State Position</p>
      <p>Less reliance of human manual manipulation of valves and assurance of proper lineups</p>
      <p>Increased Safety and Efficiency</p>
      <p>Mitigates Hands on Safety Risk and reduces exposure to Pressure Zones</p>
      <p>Improvement opportunity of Time Between Pressure Test (TBPT)</p>
      <p>Retrofit and requires no modification to OEM Valve</p>
      <p>Provides OPen/Close torque feedback</p>
      <p>Allows for Preventative Maintenance Monitoring</p>
      <p>Integrates directly with EZ Chart</p>
</section>     
    </>
  )
}
export default valve