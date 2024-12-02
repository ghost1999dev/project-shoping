import React from 'react'
import { Nav } from '../components/Nav';
import { Buscador } from '../components/Buscador';
import { Formulario } from '../components/Formulario';

export const Xbox = ({addProductCart}) => {
  const products = [
    {
      title: 'The Last of Us Part II',
      description: 'Un juego de acción y aventura que sigue la historia de Ellie en un mundo postapocalíptico.',
      price: 70.99,
      img: 'https://elsalvadorjuegosdigitales.com/wp-content/uploads/2022/12/1643323985-the-last-of-us-remastered-ps4.jpg'
    },
    {
      title: 'God of War (2018)',
      description: 'Un reinicio de la famosa serie, que sigue a Kratos y su hijo Atreus en una aventura épica en la mitología nórdica.',
      price: 65.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOrxsg_CfkJRHYugWbdRUKcoRioQa2k9tPg&s'
    },
    {
      title: 'Spider-Man: Miles Morales',
      description: 'Un juego de acción en el que controlas a Miles Morales mientras navega por Nueva York como Spider-Man.',
      price: 70.99,
      img: 'https://www.juegosdigitaleselsalvador.com/files/images/productos/1700783848-marvel-spider-man-miles-morales-ps5-0.jpg'
    },
    {
      title: 'Ghost of Tsushima',
      description: 'Un juego de mundo abierto ambientado en el Japón feudal, donde controlas a un samurái que lucha contra la invasión mongola.',
      price: 25.99,
      img: 'https://m.media-amazon.com/images/I/71Uggk1wf3L._AC_UF894,1000_QL80_.jpg'
    },
    {
      title: 'Horizon Zero Dawn',
      description: 'Un juego de rol de acción que sigue a Aloy, una cazadora en un mundo postapocalíptico lleno de criaturas robóticas.',
      price: 15.99,
      img: 'https://m.media-amazon.com/images/I/71077ot3J9S._AC_UF1000,1000_QL80_.jpg'
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
