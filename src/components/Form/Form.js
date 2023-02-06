import './Form.css'
import { useState } from 'react'

const Form = (handleOnSubmit) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

/*     const handleOnSubmit = (event) => {
        event.preventDefault()
        const newBuyer = {
            buyer: {
                name,
                address,
                email
            }
        }
    } */

    return(
        <form className="form" onSubmit= {() => handleOnSubmit({ name, address, email})}>
            <label>
                Nombre
                <input value={name} onChange={ev => setName(ev.target.value)} />
            </label>
            <label>
                Direccion
                <input value={address} onChange={ev => setAddress(ev.target.value)} />
            </label>
            <label>
                Email
                <input value={email} onChange={ev => setEmail(ev.target.value)}/>
            </label>
            <button type='submit'>Enviar formulario</button>
        </form>
    )
}

export default Form