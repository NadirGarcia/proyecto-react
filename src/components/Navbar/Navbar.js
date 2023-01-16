import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { useNavigate, Link } from 'react-router-dom'


const Navbar = () => {
const navigate = useNavigate()

    return (
        <nav className='navbar'>
            <div className='navbar__brand'>
                <img onClick={() => navigate('/')} src = './images/correo.png'  className ='header__logo' alt ='logo' />
                <div className = 'navbar__search'>
                    <input className='navbar__input'></input>
                    <button className='navbar__input--btn'>Buscar</button>
                </div>
                <CartWidget />
            </div>
            <div className='navbar__buttons'>
                <Link to={`/category/beach`} className= 'btn'>Playa</Link>
                <Link to={`/category/city`} className= 'btn'>Ciudad</Link>
            </div>
        </nav>
    );
};

export default Navbar

