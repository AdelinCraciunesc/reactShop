import React from 'react'
import './NavbarTop.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RestoreIcon from '@mui/icons-material/Restore';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const NavbarTop = () => {
    return (
        <nav className='navbar-top'>
            <div className='icon'>
                <LocalShippingIcon />
                <p>Free delivery over 50€</p>
            </div>
            <div className='icon'>
                <RestoreIcon />
                <p>Return your items for free in 14 days!</p>
            </div>
            <div className='icon'>
                <Inventory2OutlinedIcon />
                <p>Delivery in less than 48 hours!</p>
            </div>
        </nav>
    )
}

export default NavbarTop