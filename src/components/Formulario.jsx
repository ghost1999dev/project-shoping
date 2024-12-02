import React from 'react'

export const Formulario = () => {

    const sendMessageWhatsApp=()=>{
        const number = '60369120'
        const message = 'Hola, es un gusto tenerte en nuestro mundo de tecnologia'
        const url = 'https://api.whatsapp.com/send?phone=' + number +'&text=' + encodeURIComponent(message)
        window.open(url, '_blank')
    }
    return (
        <div className='add'>
            <h3 className='title'>Agregar pelicula</h3>
            <form action="">
                <input type="text" placeholder='Titulo' />
                <textarea name="" id="" placeholder='Descripcion'></textarea>
                <input type="submit" value="Guardar" />
            </form>
            <button className='edit' onClick={()=>{
                sendMessageWhatsApp()
            }}>Conectar WhatsApp</button>
        </div>
    )
}
