import './Form.css'
import { useState } from 'react'

const Form = (handleOnSubmit) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')


    return(
        <form className="form" onSubmit= {() => handleOnSubmit(name)}>
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