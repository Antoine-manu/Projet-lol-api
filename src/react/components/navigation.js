import React from "react";
import {Link} from 'react-router-dom';

function Navigation(){

    return(
        <ul>
            <Link to="/">
            <li>Acceuil</li>
            </Link>
            <Link to="/list">
            <li>Liste</li>
            </Link>
        </ul>
    )

}

export default Navigation;