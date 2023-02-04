import CartList from "../CartList/CartList"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cart, total } = useContext(CartContext)

    return(
        <div>
            <h2>Mi Carrito</h2>
            <CartList cart= {cart}/>
            <h4>Total de la compra ${total}</h4>
            <Link to='/checkout'>Comprar</Link>
        </div>
    )
}

export default CartContainer