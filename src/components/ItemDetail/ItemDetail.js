//import ItemCount from './components/ItemCount/ItemCount';

const ItemDetail = ({ products }) => {
    return(
        <ul>
            {products.map(prod => <li>{prod.name}</li>)}
        </ul>
    )
}

export default ItemDetail