import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [detailProducts, setDetailProducts] = useState ({})
    const [loading, setLoading] = useState(false)
    const { prodId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, 'products', prodId)
        
        getDoc(productRef).then(response => {
            const data = response.data()
            const prodAdapted = { id: response.id, ...data}

            setDetailProducts(prodAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    },[prodId])

    if(loading){
        return(<h4>Cargando Productos...</h4>)
    }

    return(
        <div className="container">
            <ItemDetail { ...detailProducts }/>
        </div>
    )
}

export default ItemDetailContainer