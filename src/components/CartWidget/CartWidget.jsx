import {BsCart} from 'react-icons/bs'
import { Badge } from '@mui/material'
import { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'

const CartWidget = () => {
    const {cart} = useContext(CartCtx)
    return (
        <Badge color='secondary' badgeContent={cart.length} >
            <BsCart size={25} />
        </Badge>
    )
}

export default CartWidget