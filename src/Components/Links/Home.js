import React from 'react'
import '../../CSS/Home.css'
import Chart from '../../Images/EZ Chart no background.png';
import Test from '../../Images/Test.png'
import Vision from '../../Images/Vision.png'
import Valve from '../../Images/Valve.png'


function home(){
  return(
    <>
      <img id="main-pic" src="https://via.placeholder.com/1200x900"/>   
      <div className="we-are">Engenuity Inc designs and manufactures technologically advanced hydrostatic testing equipment and software. Primarily focused on improving the safety and economics of BOP testing, both onshore and offshore, Ei has developed several patent pending innovations specifically targeting the deficiencies associated with current hydrostatic testing. The innovative hydrostatic testing equipment and software, some of which have been jointly developed with Shell International Exploration and Production Company, utilizes extremely precise pressure control and volume measurement of the intensificaiton fluid required to reach and maintain a test pressure. This test metodology provides for a direct measurement of the leak rate and the apparent compressibility of the entire pressurized system.</div>
   
      <div id="all-products">
        <div className="ez"><a href="/ezchart"><img className="pic-chart" src={Chart} width="250px" height="250px"/></a>
        <div className="name1">EZ</div>
        <div className="name2">CHART</div>     
        <div className="continue"> Continue >></div>
        <div className="brief-description">Pressure testing haredware and software that objectively identifies the precise moment a test meets passing criterion</div></div>

        <div className="ez"><a href="/eztest"><img className="pic-test" src={Test} width="240px" height="220px"/></a>
        <div className="name1">EZ</div>
        <div className="name2">TEST</div>
        <div className="continue"> Continue >></div>
        <div className="brief-description">Automated technologically advanced hydrostatic test system specifically designed for the oilfield</div></div>

        <div className="ez"><a href="/ezvision"><img className="pic-vision" src={Vision} width="180px" height="200px"/></a>
        <div className="name1">EZ</div>
        <div className="name2">VISION</div>
        <div className="continue"> Continue >></div>
        <div className="brief-description">An advanced acoustic leak location system</div></div>

        <div className="ez"><a href="/ezvalve"><img className="pic-valve" src={Valve} width="150px" height="160px"/></a>
        <div className="name1">EZ</div>
        <div className="name2">VALVE</div>
        <div className="continue"> Continue >></div>
        <div className="brief-description">An automated valve alignment system that opens and closes valves with a push of a button</div></div>
       
      </div>
  
    </>
  )
}
export default home