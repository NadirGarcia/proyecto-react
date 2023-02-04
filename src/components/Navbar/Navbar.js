import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


const Navbar = () => {
const navigate = useNavigate()

const {totalQuantity} = useContext(CartContext)

    return (
        <nav className='navbar'>
            <div className='navbar__brand'>
                <img onClick={() => navigate('/')} src = './images/correo.png'  className ='header__logo' alt ='logo' />
                <div className = 'navbar__search'>
                    <input className='navbar__input'></input>
                    <button className='navbar__input--btn'>Buscar</button>
                </div>
                <CartWidget qty = {totalQuantity} />
            </div>
            <div className='navbar__buttons'>
                <Link to={`/category/beach`} className= 'btn'>Playa</Link>
                <Link to={`/category/city`} className= 'btn'>Ciudad</Link>
                <Link to={`/category/mountain`} className= 'btn'>Montaña</Link>
            </div>
        </nav>
    );
};

export default Navbar

