import React from 'react'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
import {Link} from 'react-router-dom'
import './Menu.css'

    function Menu() {
        return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo JeFlix" />
            </Link>
            <Link to ="/help">
            <Button as={Link} className="ButtonLink" to="/help">
            About Us
            </Button>
            </Link>
        </nav>
)
}
export default Menu