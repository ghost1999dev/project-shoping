import React from 'react'
import { Nav } from './Nav'
import { Listado } from './Listado'
import { Buscador } from './Buscador'
import { Formulario } from './Formulario'

export const Inicio = ({addProductCart}) => {
    return (
        <>
            <header className='header'>
                <h1>InnovateTech</h1>
            </header>
            <Nav />
            <Listado addProductCart={addProductCart}/>
            <aside className='lateral'>
                <Buscador />
                <Formulario />
            </aside>
            <footer className='footer'>
                &copy; 2024 - All rights reserved
            </footer>
        </>
    )
}
