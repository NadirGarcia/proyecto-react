import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, price, category, img, description, stock }) => {
    return(
        <div className='div__container'>
            <h2>{name}</h2>
            <img src={img} alt='foto' className='image__detail'/>
            <div className='div__description'>
                <div className='div__description--data'>
                    <p>{description}</p>
                </div>
                <div className='div__description--buy'>
                    <p>Precio por dia ${price}</p>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail