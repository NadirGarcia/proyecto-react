import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../asyncMock"
import { useEffect, useState } from "react"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
        
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    },[])

    return(
        <h1 className = "h1">{greeting}</h1>,
        <ItemList products={products}/>
    )
}

export default ItemListContainer