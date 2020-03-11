import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import '../CSS/Menu.css'
import {Breakpoint} from 'react-socks'



const DropdownExampleDropdown = () => {
return(
<>
<Breakpoint customQuery="(max-width:600px)">
  <Link id='home' to= '/'>Ei</Link>
  <div className='container'>
  <div className='sub-container'>
    <div id='small-company-name'>Engenuity Inc.</div>
    <div id='small-slogan'>Ingenuity for Energy</div>
  </div>
  </div>
  </Breakpoint>
  <Breakpoint customQuery="(min-width:601px)">
  <Link id='home' to= '/'>Ei</Link>
  <div className='container'>
  <div className='sub-container'>
    <div id='company-name'>Engenuity Inc.</div>
    <div id='slogan'>Ingenuity for Energy</div>
  </div>
  </div>
  </Breakpoint>

</>
)}

export default DropdownExampleDropdown