import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import '../CSS/Menu.css'



const DropdownExampleDropdown = () => (
  <>
  <Link id='home' to= '/'>Ei</Link>
  <div className='container'>
  <div className='sub-container'>
    <div id='company-name'>Engenuity Inc.</div>
    <div id='slogan'>Ingenuity for Energy</div>
  </div>
  </div>
  </>
)

export default DropdownExampleDropdown