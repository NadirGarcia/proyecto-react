import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts 
        
        asyncFunction(categoryId)
        .then(products => {
                setProducts(products)
        }).catch(error =>{
                    console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    },[categoryId])

    if(loading){
        return(<h4>Cargando Productos...</h4>)
    }

    return(
        <div>
            <h1 className = 'greeting'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer