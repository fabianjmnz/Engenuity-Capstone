import React from 'react'
import Menu from '../Components/Menu'
import '../CSS/Header.css'
import {Example} from './Menu/Example'


function Header(){
return(
  <div id="header">
    <Menu/>
    <Example/>
  </div>
)
}
export default Header