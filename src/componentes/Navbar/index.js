import './style.css'

const Navbar = () => {
    return (

         <nav className="navContainer bg-dark border-bottom border-body" data-bs-theme="dark">
            
          <a href='#' className='logo'><h1>RE/MAX REALTY</h1></a>
            <ul className="menu">
                <li><a className="menu-link" href="#">Home</a></li>
                <li><a className="menu-link" href="#">Propiedades</a></li>
                <li><a className="menu-link" href="#">Terrenos</a></li>
                <li><a className="menu-link" href="#">Nosotros</a></li>
                <li><a className="menu-link" href="#">Contacto</a></li>
             </ul>
            <div className='carrito'>
                <h2>🛒0</h2>
            </div> 
        </nav>
    )

}

export default Navbar