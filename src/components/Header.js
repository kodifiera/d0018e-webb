import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox'
import Cookies from 'js-cookie'
//import '../css/Header.css'

export default function Header() {

    const logout = () => {
        Cookies.remove("jwt");
        Cookies.remove("email");
        Cookies.remove("password");
    }

    const logoutButtonPressed = e => {
        logout();
        window.location.assign("/")
    }

    return (
        <header className="App-header">
                <nav className="Navbar">
                    <ul>
                        <li><SearchBox/></li>
                        <li>
                            <Link to="/">Startsida</Link>
                        </li>
                        <li>
                            <Link to="/products">Produkter</Link>
                        </li>
                            {Cookies.get("jwt") ? (
                                <>
                                    <li>
                                        <Link to="/account">Konto</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={logoutButtonPressed}>Logga ut</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">Logga in</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Registrera profil</Link>
                                    </li>
                                </>
                            )}
                        <li>
                            <Link to="/cart">Kundkorg</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
}