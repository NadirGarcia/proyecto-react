import "./CartWidget.css"
import { Link } from "react-router-dom"

const CartWidget = ({ qty }) => {

    return(
        <Link to='/cart' className = "cart__widget">
            <img src="./images/cart-fill.svg" className = "cart__widget--img" alt = "cartWidget" />
            <p className = "cart__widget--number">{ qty }</p>
        </Link>
    )
}

export default CartWidget