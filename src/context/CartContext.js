import { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)){
            setCart(prev => [...prev, itemToAdd])
        }
    }

    const isInCart = (id) => cart.some(prod => prod.id === id)

    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach( prod => {
            accu  += prod.quantity
        })
        return accu
    } 

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0
        cart.forEach( prod => {
            total  += prod.quantity * prod.price
        })
        return total
    }

    const total = getTotal()

    const removeItem = (id) => {
        const cartUpdated= cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    return(
        <CartContext.Provider value = {{addItem, isInCart, totalQuantity, cart, removeItem, total}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider