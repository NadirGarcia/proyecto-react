import "./CartWidget.css"

const CartWidget = () => {
    return(
        <div className = "cart__widget">
            <img src="./images/cart-fill.svg" className = "cart__widget--img" alt = "cart" />
            <p className = "cart__widget--number">0</p>
        </div>
    )
}

export default CartWidget