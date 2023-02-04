import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, where, query } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const prodDB = response.docs.map(prod => {
                const data = prod.data()
                return{ id:prod.id, ...data}
            })
        
            setProducts(prodDB)
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