import React from 'react'
import Menu from '../Components/Menu'
import '../CSS/Header.css'
import {Example} from './Menu/Example'
import { BreakpointProvider } from 'react-socks'


function Header(){
return(
  <div id="header">
    <BreakpointProvider>
    <Menu/>
    <Example/>   
    </BreakpointProvider>
  </div>
)
}
export default Header