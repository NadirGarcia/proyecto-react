import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__brand'>
                <img src = './images/correo.png' className ='header__logo' alt ='logo' />
                <div className = 'navbar__search'>
                    <input className='navbar__input'></input>
                    <button className='navbar__input--btn'>Buscar</button>
                </div>
                <CartWidget />
            </div>
            <div className='navbar__buttons'>
                <Button label ='Paquetes'/>
                <Button label ='Vuelos'/>
                <Button label ='Alojamientos'/>
                <Button label ='Paradisiacos'/>
                <Button label ='Ofertas'/>
            </div>
        </nav>
    );
};

export default Navbar

