import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
    <ul>
      <li><NavLink to="/inicio">Play Station</NavLink></li>
      <li><NavLink to="/xbox">Xbox</NavLink></li>
      <li><NavLink to="/computadoras">Computadoras</NavLink></li>
      <li><NavLink to="/telefonos">Telefonos</NavLink></li>
      <li><NavLink to="/accesorios">Accesorios</NavLink></li>
      <li><NavLink to="/consolas">Consolas</NavLink></li>
      <li><a href="">Contactenos</a></li>
      <li><NavLink to="/pedidos">Pedidos</NavLink></li>
    </ul>
  </nav>
  )
}
