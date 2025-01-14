import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout, cartItems, role }) => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <span className="navbar-brand mx-auto" style={{ fontSize: '24px', fontWeight: 'bold' }}>Szkolny Sklepik</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {role !== 'admin' && (
                        <>
                            <li className="nav-item"><Link to="/" className="nav-link">Produkty</Link></li>
                            <li className="nav-item"><Link to="/cart" className="nav-link">Koszyk ({cartItems.length})</Link></li>
                            <li className="nav-item"><Link to="/order-history" className="nav-link">Historia Zamówień</Link></li>
                        </>
                    )}
                    {role === 'admin' && <li className="nav-item"><Link to="/admin" className="nav-link">Panel Administratora</Link></li>}
                    {role && <li className="nav-item"><button className="btn btn-outline-danger" onClick={onLogout}>Wyloguj</button></li>}
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
