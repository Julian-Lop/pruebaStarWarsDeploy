import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="Home">
             <img src="https://www.gifsanimados.org/data/media/636/star-wars-y-guerra-de-las-galaxias-imagen-animada-0043.gif" border="0" alt="star-wars-y-guerra-de-las-galaxias-imagen-animada-0043" />
            <h1>Bienvenido a la Star Wars SPA</h1>
            <Link to="/films"><button>Films <i class="fas fa-film"></i></button></Link>
        </div>
    )
}