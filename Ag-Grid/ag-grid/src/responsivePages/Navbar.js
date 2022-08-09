import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-icons/fa'
import { NavItems } from './NavItems'
import LoginPage from './LoginPage'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-light' style={{ backgroundColor: 'white' }}>
                <Link to={'/'} className='navbar-logo'>
                    Evoke Technologies
                    <Icons.FaTree />
                </Link>
                <div className='navbar navbar-light' style={{ justifyContent: 'space-between', marginRight: 30 }}>
                    {NavItems.map((item) => {
                        return (
                            <p key={item.id}
                                className={item.className}>
                                <Link to={item.path}>{item.title}</Link>
                            </p>)
                    })}
                </div>
               
            </nav>
        </div>
    )
}

export default Navbar;