import { getProducts } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [detailProducts, setDetailProducts] = useState ([])

    useEffect(() => {
        getProducts().then(products => {
            setDetailProducts(products)
        })
    },[])

    return(
        <div>
            <ItemDetail products={detailProducts}/>
        </div>
    )
}

export default ItemDetailContainer