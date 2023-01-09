import ItemCount from './components/ItemCount/ItemCount';

const ItemDetail = ({id, name, price, category, img, description}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src= {img} className = 'image' alt = "foto"/>
            <h3>{price}</h3>
            <p>{description}</p>
            <ItemCount onAdd = {(count) => console.log(count)} initial='1'/> 
        </div>
    )
}

export default ItemDetail