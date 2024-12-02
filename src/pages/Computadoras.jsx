import React from 'react'
import { Nav } from '../components/Nav';
import { Buscador } from '../components/Buscador';
import { Formulario } from '../components/Formulario';

export const Computadoras = ({addProductCart}) => {
    const products = [
        {
          title: 'ACER - Predator',
          description: 'Dondequiera que la creatividad te lleve, la Predator Helios Neo 14 es la mejor herramienta para el profesional versátil, el creador apasionado y el gamer competitivo. Haz que cada entorno sea tu arena, cada cafetería sea un estudio y cada espacio sea tu lugar.',
          price: 45.99,
          img: 'https://images.acer.com/is/image/acer/predator-helios-neo-14-phn14-51-non-fingerprint-3-zone-backlit-on-wp-black-01-1?$Series-Component-XL$'
        },
        {
          title: 'HP - Gaming-15',
          description: 'La delgada y poderosa HP Pavilion Gaming Laptop te da la experiencia de gráficos de alto nivel y potencia de procesamiento que satisface tus necesidades de juegos y creación de contenidos. Lista para juegos. Lista para todo',
          price: 59.99,
          img: 'https://m.media-amazon.com/images/I/61K4V7ewYPL._AC_UF894,1000_QL80_.jpg'
        },
        {
          title: 'McBook M1',
          description: 'macOS es el sistema operativo para computadoras de escritorio más avanzado del mundo. Y macOS Ventura mejora aún más todo lo que te encanta hacer con tu Mac, para que puedas trabajar, jugar y disfrutar como nunca antes',
          price: 69.99,
          img: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png'
        },
        {
          title: 'McBook Pro - 2017',
          description: 'Las funcionalidades de accesibilidad ayudan a las personas con alguna discapacidad a aprovechar al máximo la nueva MacBook. Gracias al soporte integrado para visión, audición, motricidad y aprendizaje, crear y hacer cosas asombrosas está al alcance de todos.',
          price: 49.99,
          img: 'https://m.media-amazon.com/images/I/71nM55mRvxL.jpg'
        }
      ];
  return (
    <>
    <header className='header'>
    <h1>InnovateTech</h1>
    </header>
    <Nav/>
    <section className='content'>
          {products.map((product, index)=>{
            return(
              <article className='peli-item' key={index}>
                <h3 className='title'>{product.title}</h3>
                <p className='description'>{product.description}</p>
                <img src={product.img} alt="" />
                
                <p className='description'>${product.price}</p>
                <button 
                  className='edit'
                  onClick={()=> {
                    addProductCart(product)
                  }}
                >Comprar</button>
              </article>
            )
          })}
    </section>
    <aside className='lateral'>
                <Buscador />
                <Formulario />
            </aside>
    </>
  )
}
