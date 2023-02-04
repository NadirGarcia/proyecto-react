import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, price, img, description, stock }) => {

    const {addItem, isInCart} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({id, name, price, quantity})
    }
    
    return(
        <div className='div__container'>
            <h2>{name}</h2>
            <img src={img} alt='foto' className='image__detail'/>
            <div className='div__description'>
                <div className='div__description--data'>
                    <p>{description}</p>
                </div>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ):(
                    stock !== 0 ? (
                    <div className='div__description--buy'>
                        <p>Precio por dia ${price}</p>
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    </div>
                    ) : (
                        'Producto no disponible'
                    ) 
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail