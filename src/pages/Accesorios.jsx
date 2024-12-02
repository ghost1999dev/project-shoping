import React from 'react'
import { Nav } from '../components/Nav';
import { Buscador } from '../components/Buscador';
import { Formulario } from '../components/Formulario';

export const Accesorios = ({addProductCart}) => {
  const products = [
    {
      title: 'Disco duro externo',
      description: 'DISCO DURO EXTERNO ADATA 1TB HD710 PRO USB 3.2 AHD710P-1TU31-CBK.',
      price: 59.99,
      img: 'https://cdn.elchangarro.com.sv/image/uploads/ec/168292-disco-duro-externo-de-1-tb.jpg?quality=40&width=1000&height=1000'
    },
    {
      title: 'USB Hub',
      description: '¡Multiplica los puertos USB!, Conecta este HUB USB (concentrador) a tu computadora o laptop para transferir archivos de diferentes dispositivos.',
      price: 20.99,
      img: 'https://www.steren.com.sv/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/2250427f4/hub-usb-3-0-de-4-puertos.jpg'
    },
    {
      title: 'Mouse RAZER',
      description: 'Mouse Inalambrico Y Bluetooth Razer Cobra Pro Rgb Focus Pro Sensor 30k Rz01-04660100-r3u1.',
      price: 30.99,
      img: 'https://www.zonadigitalsv.com/product/840272903056/image'
    },
    {
      title: 'Audifonos RAZER',
      description: 'Razer Kraken Auriculares para juegos: marco de aluminio ligero, micrófono retráctil con aislamiento de ruido, para PC, PS4, PS5, Switch, Xbox One, Xbox Series X y S, móvil, conector de audio de 0.138.',
      price: 80.99,
      img: 'https://f.media-amazon.com/images/I/71wSL6uRfKL._AC_SX679_.jpg'
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
