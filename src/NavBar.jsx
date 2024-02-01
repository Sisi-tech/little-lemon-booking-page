import lemonLogo from './assets/lemonLogo.png';
import hamburgerMenuIcon from './assets/hamburger-menu.png';
import shoppingCart from './assets/shopping-cart.png';
import './App.css'

function NavBar() {

    return (
        <>
            <nav className='container '>
                <img src={hamburgerMenuIcon} alt='hamburgerMenuIcon' className='hamburgerMenuIcon'/>
                <img src={lemonLogo} alt="Lemon Logo" className='lemonLogo'/>
                <img src={shoppingCart} className='cartIcon' alt="Cart Icon" />
            </nav>
        </>
    )
}

export default NavBar