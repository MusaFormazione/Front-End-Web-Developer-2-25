import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="d-flex justify-content-center py-3">
            <div className='me-5'>Logo</div>
            <nav>
                <ul class="nav nav-pills">
                    <Navbar/>
                </ul>
            </nav>
        </header>
    )
}

export default Header