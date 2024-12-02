import React from 'react'
import { Nav } from '../components/Nav';
import { Buscador } from '../components/Buscador';
import { Formulario } from '../components/Formulario';

export const Telefonos = ({addProductCart}) => {
    const products = [
        {
          title: 'Samsung S22 Ultra',
          description: 'El Samsung Galaxy S22 Ultra es un puñetazo en la mesa a nivel de hardware. Tiene la pantalla más luminosa del mercado, un procesador Exynos con una GPU de AMDo',
          price: 45.99,
          img: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-S22-ULTRA-5G-512GB-GREEN-Unlocked_74f7eb8f-8c14-4192-bff8-1bd1e91a3b97.f4f2dc71a43be3abebbcfd157bc81500.jpeg'
        },
        {
          title: 'Samsung S24 Ultra',
          description: 'Este S24 Ultra es completamente plano. Si le sumamos que se ha reducido notablemente el tamaño de los marcos, el resultado del frontal es sencillamente espectacular',
          price: 59.99,
          img: 'https://www.prado.com.sv/media/catalog/product/c/e/celular-5g-samsung-galaxy-s24-ultra-morado-512gb-190331.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width='
        },
        {
          title: 'Iphone 15',
          description: 'Con la app Duplicación del iPhone puedes ver la pantalla de tu teléfono en la Mac y controlarlo a distancia. Las funcionalidades de Continuidad te permiten responder llamadas y mensajes directamente desde la Mac',
          price: 69.99,
          img: 'https://www.ishopcentroamerica.com/images/catalogo/90A7D1A7E0F6.jpg'
        },
        {
          title: 'Iphone 14',
          description: 'Los acabados son de calidad, así como los materiales. La sensación es la de sostener un teléfono robusto, cuyo diseño del módulo no facilita que se acumule polvo como en otros casos.',
          price: 49.99,
          img: 'https://www.radioshackla.com/media/catalog/product/4/6/462352700012_b2vysodbttdu8pax.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
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
