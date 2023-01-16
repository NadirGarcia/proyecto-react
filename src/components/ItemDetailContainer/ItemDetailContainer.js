import './ItemDetailContainer.css'
import { getProductsById } from "../../asyncMock"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [detailProducts, setDetailProducts] = useState ([])
    const { prodId } = useParams()

    useEffect(() => {
        getProductsById(prodId).then(product => {
            setDetailProducts(product)
        })
    },[prodId])

    
    return(
        <div className="container">
            <ItemDetail {...detailProducts}/>
        </div>
    )
}

export default ItemDetailContainer