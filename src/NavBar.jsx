import lemonLogo from './assets/lemonLogo.png';
import hamburgerMenuIcon from './assets/hamburger-menu.png';
import shoppingCart from './assets/shopping-cart.png';
import './App.css'

function NavBar() {

    return (
        <>
            <nav className='w-full flex justify-between align-center'>
                <img src={hamburgerMenuIcon} alt='hamburgerMenuIcon' className='w-8 h-8 m-4'/>
                <img src={lemonLogo} alt="Lemon Logo" className='w-40 h-2/5'/>
                <img src={shoppingCart} alt="Cart Icon" className='w-14 h-14 m-4'/>
            </nav>
        </>
    )
}

export default NavBar