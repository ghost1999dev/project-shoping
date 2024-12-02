import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Listado } from '../components/Listado'
import { Route } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Routes } from 'react-router-dom'
import { Pedidos } from '../components/Pedidos'
import { useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'
import { Computadoras } from '../pages/Computadoras'
import { Telefonos } from '../pages/Telefonos'
import { Accesorios } from '../pages/Accesorios'
import { Xbox } from '../pages/Xbox'
import { Consola } from '../pages/Consola'
export const RutaPrincipal = () => {
    const [stateProduct,setProduct]=useState(()=>{
        const savedProduct = localStorage.getItem('cartProduct')
        return savedProduct ? JSON.parse(savedProduct):[]
    })
    const addProductCart=(product)=>{
        console.log(product);
        toast.success('Producto agregado con exito')
        const updateProduct = [...stateProduct,product]
        setProduct(updateProduct)
        localStorage.setItem('cartProduct',JSON.stringify(updateProduct))
    }

    return (
        <BrowserRouter>
        <Toaster/>
            <Routes>
                <Route path='/' element={<Inicio  />} />
                <Route path='/xbox' element={<Inicio addProductCart={addProductCart}/>}/>
                <Route path='/inicio' element={<Xbox addProductCart={addProductCart}/>}/>
                <Route path='/computadoras' element={<Computadoras addProductCart={addProductCart}/>}/>
                <Route path='/telefonos' element={<Telefonos addProductCart={addProductCart}/>}/>
                <Route path='/accesorios' element={<Accesorios addProductCart={addProductCart}/>}/>
                <Route path='/consolas' element={<Consola addProductCart={addProductCart}/>}/>
                <Route path='/pedidos' element={<Pedidos product={stateProduct}/>}/>
            </Routes>

        </BrowserRouter>
    )
}
