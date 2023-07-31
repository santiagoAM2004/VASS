import React from 'react'
import Logo from '../../Assets/Images/logo-vass-blanco.png'
function LogoMenu(props) {
  return (
    <div className ={props.padding}>
      <img src={Logo} alt="Logo" />
    </div>
  )
}

export default LogoMenu
