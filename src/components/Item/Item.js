import './Item.css'

const Item = ({id, name, price, category, img, description}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src= {img} className = 'image' alt = "foto"/>
            <h3>${price}</h3>
        </div>
    )
}

export default Item