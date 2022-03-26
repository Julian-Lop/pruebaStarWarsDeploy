import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="Navbar">
            <ul>
                <li><Link to="/">Home <i class="fas fa-home"></i></Link></li>
                <li><Link to="/films">Films <i class="fas fa-film"></i></Link></li>
                <li><Link to="/starships">Starships <i class="fas fa-space-shuttle"></i></Link></li>
                <li><Link to="/vehicles">Vehicles <i class="fas fa-truck-pickup"></i></Link></li>
            </ul>
        </div>
    )
}