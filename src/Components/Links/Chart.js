import React from "react";
import "../../CSS/Products.css";
import Photo1 from "../../Images/EZ Chart 2.png";
import Photo2 from "../../Images/ez chart 3.png";
import Photo3 from "../../Images/EZ Chart Lite.png";
import Photo4 from "../../Images/EZ Chart no background.png";
import Photo5 from "../../Images/Small Pelican Case.png";

function chart() {
  return (
    <>
    <section className="block">
      <h1 className="title">EZ Chart</h1>
      <div className="scroll-pictures">
        <ul className="list">
          <img src={Photo1} />
          <img src={Photo2} />
          <img src={Photo3} />
          <img src={Photo4} />
          <img src={Photo5} />
          <img src="https://via.placeholder.com/250" />
          <img src="https://via.placeholder.com/250" />
        </ul>
      </div>
    </section>


    <section className="block">
      <div className="product-detail-header">What is EZ Chart?</div>
      <br />
      <div className="detail">
        An advanced digital pressure recording system that allows the operator to precisely monitor and record pressure tests. The easy to use and intuitive interface allosw operators to input the pressure test parameters as well as their pass/fail criteria. Both the test pressure and pressure decay rate are clearly graphed on the display screen. EZ Chart provides an automated and objective means of determining pass/fail results which brings a higher level of safety and validity to the pressure test process by removing the subjective interpretation of mechanical circle charts. Operators using the EZ Chart System can quickly validate pressure test results saving substantial time and money. The pressure test data is recorded five times a second in a secure log file. The basic EZ Chart System includes a Getac V110 ruggedized computer which can be detached for convenience. The EZ Chart System features both WiFi and cellular communication capabilities.
      </div>     
    </section>
      
    <section className="block">
      <div className="benefit-header">FEATURES:</div>
      <p>Digital Pressure Testing with consistency, repeatability and objective results</p>
      <p>Less reliance on human determination of pass/fail</p>
      <p>User Interface that allows faster decision making to abourt failing tests</p>
      <p>KPI tracking and efficiency of Time to Pressure Test (TPT) and Time to Between Pressure Test (TBPT)</p>
      <p>Live Modeling & Warning Generation</p>
      <p>WITSML and OPC capable to provide Real-Time Feedback for monitoring centers</p>
 
      </section>   
    </>
  );
}
export default chart;
