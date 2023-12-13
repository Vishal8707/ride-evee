import React from 'react'
import Logo from '../assets/Logo.jpg'

import {VscAccount} from 'react-icons/vsc'

function Header() {
  return (
    <>
    <div className='header'>
        <img src={Logo} alt="Logo" />
        <div style={{color:'green'}}>
            24X7 +91876578984
        </div>
        <VscAccount style={{height:"30px", width:'30px'}}/>
    </div>
    </>
  
  )
}

export default Header