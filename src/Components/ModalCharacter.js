import React from 'react'
import { useSelector } from "react-redux"

export default function ModalCharacter({info,setvisibility}){

    const film = useSelector((state) => state.films)
    const planet = useSelector((state) => state.planets)
    const starship = useSelector((state) => state.starshipsformaping)
    const vehicle = useSelector((state) => state.vehiclesformpaing)

    const exit = () => {
        setvisibility(false)
    }

    return (
        <div className='ModalCharacter'>
                {info ? 
                <div>
                    <h1><i class="fas fa-user-alt"></i></h1>
                    <h3>{info.name}</h3><hr></hr>
                    <h4>Height: {info.height}</h4>
                    <h4>Mass: {info.mass}</h4>
                    <h4>Hair color: {info.hair_color}</h4>
                    <h4>Eye color: {info.eye_color}</h4>
                    <h4>Birth year: {info.birth_year}</h4>
                    <h4>Gender: {info.gender}</h4>
                    <h4>Homeworld: {planet.map(f =>{
                        if(f.url.includes(info.homeworld)){
                            return f.name
                        }
                    })}</h4>
                    <h4>Films: {info.films.map(f => film.results[Number(f.substr(-2,1))-1].title+', ')}</h4>
                    <h4>Vehicles: {info.vehicles.map(e => {
                        return vehicle.map(f => {
                            if(f.url === e){
                                return f.name+', '
                            }})   
                    })}</h4>
                    <h4>Starships : {info.starships.map(e => {
                        return starship.map(f => {
                            if(f.url === e){
                                return f.name+', '
                            }})   
                    })}</h4>
                    <button onClick={exit}><i class="fas fa-times"></i></button>
                </div>:<h1>Cargando</h1>}      
        </div>
    )
}