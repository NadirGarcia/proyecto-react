import { useState } from 'react'

const ItemCount = ( { onAdd, initial, stock }) => {

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>add to Cart</button>
        </div>
    )
}

export default ItemCount