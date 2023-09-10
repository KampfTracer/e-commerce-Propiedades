import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (

         <nav className="navContainer bg-dark border-bottom border-body" data-bs-theme="dark">
            
          <Link to='#' className='logo'><h1>RE/MAX REALTY</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/">Propiedades</Link></li>
                <li><Link className="menu-link" to="/propiedades/habitacional">Habitacional</Link></li>
                <li><Link className="menu-link" to="/propiedades/renta">Renta</Link></li>
                <li><Link className="menu-link" to="/propiedades/terreno">Terrenos</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/">Contacto</Link></li>
             </ul>
            <div className='carrito'>
                <h2>🛒0</h2>
            </div> 
        </nav>
    )

}

export default Navbar