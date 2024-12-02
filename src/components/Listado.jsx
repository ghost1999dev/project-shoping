import React from 'react'

export const Listado = ({addProductCart}) => {
  const products = [
    {
      title: 'The First Descendant',
      description: 'Un shooter cooperativo donde los jugadores juegan el papel de guerrero.',
      price: 45.99,
      img: 'https://assets-prd.ignimgs.com/2022/08/08/first-descendant-button-1659987804417.jpg'
    },
    {
      title: 'Call of Duty: Modern Warfare II',
      description: 'Un emocionante juego de disparos en primera persona con intensas campañas y multijugador.',
      price: 59.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6juIAFATO3bJZFAppnE0pWLCyaXZPDRc9g&s'
    },
    {
      title: 'God of War: Ragnarok',
      description: 'Una épica aventura de Kratos y su hijo Atreus en la mitología nórdica.',
      price: 69.99,
      img: 'https://upload.wikimedia.org/wikipedia/en/4/42/Warhammer_40%2C000_Space_Marine_2_cover_art.jpg'
    },
    {
      title: 'Stalker',
      description: 'El último título de la popular serie de fútbol con gráficos realistas y mejor jugabilidad.',
      price: 49.99,
      img: 'https://static-it.gamestop.it/images/products/305280/3max.jpg'
    },
    {
      title: 'Tom raider',
      description: 'Explora el mundo de los vikingos en esta entrega de la famosa serie de Assassin’s Creed.',
      price: 39.99,
      img: 'https://limitedrungames.com/cdn/shop/files/tomb-raider-remastered-limited-run-games-xbx_1200x1200.png?v=1716219586'
    }
  ];
  return (
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
  )
}
