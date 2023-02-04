import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <h3>{name}</h3>
            <h3>${price}</h3>
            <h3>{quantity}</h3>
            <h4>Subtotal ${price * quantity}</h4>
            <button onClick= {() => removeItem(id)}>Eliminar de carrito</button>
        </div>
    )
}

export default ItemCart