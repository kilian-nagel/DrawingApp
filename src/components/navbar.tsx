import React from 'react';
import "../styles/navbar.css";

function Navbar() {
    return ( 
        <header id="primary-header" className="primary-header">
            <nav className="navbar navbar-expand" >
                <div className="container max-auto my-1 d-flex align-items-center justify-content-between gap-5">
                    <a href="index.html" className="navbar-brand" aria-label="Aller à l'accueil">DrawIt.</a>
                    <button className="navbar-toggler" type="button" data-bs-type="toggler" data-bs-target="navbar-mobile">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-mobile" aria-expanded="false">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link" aria-label="Aller à l'accueil">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html" className="nav-link" aria-label="Aller à la page contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html" className="nav-link" aria-label="Exporter le dessin">A propos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;