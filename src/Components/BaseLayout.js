import React from 'react'
import Header from './Header'
import Footer from './Footer'

function baseLayout(props){
  return(
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}
export default baseLayout