import "./Navbar.css"
import ng from "./ng-color.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <img src = {ng} className ="header__logo" alt ="logo" />
                <div>
                    <input className="navbar__input"></input>
                    <button className="navbar__input--btn">Buscar</button>
                </div>
            </div>
            <div className="navbar__buttons">
                <button className = "btn">No se</button>
                <button className = "btn">No se</button>
                <button className = "btn">No se</button>
                <button className = "btn">No se</button>
                <button className = "btn">No se</button>
            </div>
        </nav>
    );
};

export default Navbar

