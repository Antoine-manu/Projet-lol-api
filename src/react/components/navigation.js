import React from "react";
import {Link} from 'react-router-dom';

function Navigation(){

    return(
        <ul>
            <Link to="/">
            <li>Acceuil</li>
            </Link>
            <Link to="/Chartercall">
            <li>Liste</li>
            </Link>
        </ul>
    )

}

export default Navigation;