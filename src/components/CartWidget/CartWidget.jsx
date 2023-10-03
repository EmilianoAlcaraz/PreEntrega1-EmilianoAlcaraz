import cart from '../../assets/icons/cart.svg'

function CartWidget() {
    return (
        <div>
            <span><img src={cart} alt=""/>+99</span>
        </div>
    )
}

export default CartWidget