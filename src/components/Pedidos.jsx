import React from 'react'
import { Nav } from './Nav'
import { Buscador } from './Buscador'

export const Pedidos = ({product}) => {
  return (
    <>
      <header className='header'>
        <h1>InnovateTech</h1>
      </header>
      <Nav />
      <section className='content'>
      {product.length > 0 ? (
        
        <>
          {product.map((product,index)=>{
            return(
              <article className='peli-item' key={index}>
                <h3 className='title'>{product.title}</h3>
                <p className='description'>{product.description}</p>
                <img src={product.img} alt="" />
                <p className='description'>${product.price}</p>
                <button className='edit'>Eliminar</button>
              </article>
            )
          })}
        </>
      ):(
        
        <p className='description'>No hay productos en la seccion de pedidos</p>
        
      )}
      </section>
      
      <div className='lateral'>
        <Buscador />
      </div>
      <footer className='footer'>
        &copy; 2024 - All rights reserved
      </footer>

    </>
  )
}
