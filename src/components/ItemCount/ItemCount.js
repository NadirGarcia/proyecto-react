import { useState } from 'react'

const ItemCount = ( { initial = 1, stock }) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }

    const increment = () =>{
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const onAdd = () => {
        console.log(`Se agregaron ${count} noches`);
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount