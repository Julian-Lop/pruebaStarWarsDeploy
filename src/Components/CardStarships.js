import React from 'react'
import { useSelector } from 'react-redux'


export default function CardStarships({title,info}){

    const film = useSelector((state) => state.films)

    return (
        <div>
            <div className='Card'>
                <h2>{title ? title : null}</h2>
                <div>
                    {info ? 
                    <div>
                        <div><h4>Model: </h4><span>{info.model}</span></div>
                        <div><h4>Manufacturer: </h4><span>{info.model}</span></div>
                        <div><h4>Cost in credits: </h4><span>{info.cost_in_credits}</span></div>
                        <div><h4>Length: </h4><span>{info.length}</span></div>
                        <div><h4>Max atmosphering speed: </h4><span>{info.max_atmosphering_speed}</span></div>
                        <div><h4>Crew: </h4><span>{info.crew}</span></div>
                        <div><h4>Passengers: </h4><span>{info.passengers}</span></div>
                        <div><h4>Cargo capacity: </h4><span>{info.cargo_capacity}</span></div>
                        <div><h4>Consumables: </h4><span>{info.consumables}</span></div>
                        <div><h4>Hyperdrive rating: </h4><span>{info.hyperdrive_rating}</span></div>
                        <div><h4>MGLT: </h4><span>{info.MGLT}</span></div>
                        <div><h4>Starships class: </h4><span>{info.starship_class}</span></div>
                        <h4>Films : {info.films.map(f => film.results[Number(f.substr(-2,1))-1].title+', ')}</h4>
                    </div>:<h2>Cargando</h2>}
                </div>
            </div>
        </div>
    )
}