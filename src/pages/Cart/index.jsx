import React, { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import Layout from '../../components/Layout/Layout'

const Cart = () => {
    const { cart : cartProducts} = useContext(CartCtx)
  return (
    <Layout>
    {
        !cartProducts.length
        ? <h1>No tienes productos en tu carrito </h1>
        : <div>
            {
                cartProducts.map(products => (
                    <h3>{products.nombre}</h3>
                ))
            }
        </div>
    }
    </Layout>
  )
}

export default Cart