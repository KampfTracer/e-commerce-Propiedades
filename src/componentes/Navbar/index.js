import { Link } from 'react-router-dom'
import './style.css'
import CartWidget from '../CartWidget'
import logo from '../../img/logo.png';

const Navbar = () => {
    return (

         <nav className="navContainer bg-dark border-bottom border-body" data-bs-theme="dark">
            
            <Link to='/' className='logo'>
        <img className ="img" src={logo} alt="RE/MAX REALTY" />
      </Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/">Propiedades</Link></li>
                <li><Link className="menu-link" to="/propiedades/habitacional">Habitacional</Link></li>
                <li><Link className="menu-link" to="/propiedades/renta">Renta</Link></li>
                <li><Link className="menu-link" to="/propiedades/terreno">Terrenos</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>
             </ul>
            <div className='carrito'>
                
            </div> 
        </nav>
    )

}

export default Navbar