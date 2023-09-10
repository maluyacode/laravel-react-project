import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-primary '>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link d-flex justify-content-center' to="/"> <span className='h5 font-weight-normal'>Home</span> </Link>
                    </li>
                    <li className='nav-item d-flex justify-content-center'>
                        <Link className='nav-link' to="/create"><span className='h5 font-weight-normal'>Create</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav