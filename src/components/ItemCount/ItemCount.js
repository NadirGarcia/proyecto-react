import { useState } from 'react'

const ItemCount = ( { initial = 1, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity > 1){
            setQuantity(prev => prev - 1)
        }
    }

    const increment = () =>{
        if(quantity < stock){
            setQuantity(prev => prev + 1)
        }
    }


    return(
        <div>
            <h2>{quantity}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount