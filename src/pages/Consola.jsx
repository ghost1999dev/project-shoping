import React from 'react'
import { Nav } from '../components/Nav'
import { Buscador } from '../components/Buscador'
import { Formulario } from '../components/Formulario'

export const Consola = ({addProductCart}) => {
    const products = [
        {
          title: 'Play Station 5',
          description: 'Disfruta de tiempos de carga superveloces con un SSD de velocidad ultrarrápida, una experiencia más inmersiva gracias a la compatibilidad con respuesta háptica, gatillos adaptativos y audio 3D, además de toda una increíble colección de juegos de PlayStation.',
          price: 700.99,
          img: 'https://www.prado.com.sv/media/catalog/product/c/o/consola-ps5-sony-hw-2015-standard-latam-190119.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
        },
        {
          title: 'Play Station 4',
          description: 'Almacena tus juegos, aplicaciones, capturas de pantalla y videos en hasta 1 TB de almacenamiento en la consola PS4: más delgada y ligera que el modelo PS4 original y disponible en Jet Black y más colores.',
          price: 500.99,
          img: 'https://m.media-amazon.com/images/I/71KEcaXyZXL._AC_UF894,1000_QL80_.jpg'
        },
        {
          title: 'Xbox Serie S',
          description: 'La Xbox Series S está diseñada para juegos sin disco a 1440p (con la posibilidad de subir a 4K) y puedes elegir entre un SSD de 512 GB o 1 TB.',
          price: 499.99,
          img: 'https://http2.mlstatic.com/D_NQ_NP_818496-MSV51583797483_092022-O.webp'
        },
        {
          title: 'Xbox Series X',
          description: 'Aprovecha al máximo cada minuto de tus juegos con Quick Resume, tiempos de carga ultrarrápidos y una jugabilidad de hasta 120 FPS... todo ello con la tecnología Xbox Velocity Architecture.',
          price: 500.99,
          img: 'https://m.media-amazon.com/images/I/61rApRFkOeL.jpg'
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
