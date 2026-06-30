import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <li class="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/crea-pizza" className="nav-link">Aggiungi Pizza</Link>
            </li>
        </>
    )
}

export default Navbar