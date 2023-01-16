import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, category, img, description}) => {
    return(
        <div className = 'card'>
            <div className = 'image'>
                <img src= {img} className = 'card__image--img' alt = "foto"/>
            </div>
            <div className = 'card__info'>
                <h1>{name}</h1>
                <h3>${price}</h3>
                <Link to={`/detail/${id}`} className = 'item__btn'>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item