import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { query, where, collection, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import Form from "../Form/Form"

const Checkout = () => {
    const { cart, total } = useContext(CartContext)

    const batch = writeBatch(db)



    const createOrder = async () => {
        const newOrder = {
            buyer: {
                name:'xczc',
                address:'asad',
                email:'asdsd'
            },
            item: cart,
            total
        }

        console.log(newOrder);

        const ids = cart.map(prod => prod.id)

        const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        const productsFromFirestore = await getDocs(productsRef)
        const { docs } = productsFromFirestore

        const outOfStock = []

 /*        docs.forEach(doc=> {
            const prodDB = doc.data()
            const stockDB = prodDB.stock

            const prodInCart = cart.find(prod => prod.id === doc.id)
            const qtyInCart = prodInCart.quantity

            if(stockDB >= qtyInCart){
                batch.update(doc.ref, {stock: stockDB - qtyInCart})
            }else{
                outOfStock.push({id: doc.id, ...prodDB})
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, newOrder )

            const { id } = orderAdded

            console.log(id);
        }  */
    }



    const handleOnSubmit = ({ event, name, address, email }) => {
        event.preventDefault()
        const newBuyer = {
            buyer: {
                name,
                address,
                email
            }
        }
        console.log(newBuyer)
    }


    return (
        <div>
            <h3>Debe registrase para finalizar su compra</h3>
            <Form handleOnSubmit={handleOnSubmit}/>
            <button onClick={createOrder}>Generar Compra</button>
        </div>
    )
}

export default Checkout