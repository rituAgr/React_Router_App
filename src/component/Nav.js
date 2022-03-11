import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {
    color: 'red'
    }
    return (
        <nav>
            <h3>Logos</h3>
            <ul>
                <Link style = {navStyle} to={"/about"}>
                    <li>About</li>
                </Link>
                <Link  style = {navStyle}  to={"/shop"}>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
