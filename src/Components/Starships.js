import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardStarships from './CardStarships'
import LoadingComponent, {} from "./LoadingComponent"

export default function Starships() {
    const starshipsSW = useSelector((state) => state.starships)

    useEffect(()=>{
    },[starshipsSW])

    return (
        <div className='Container'><h1>Starships <i class="fas fa-space-shuttle"></i></h1>
            <div className='Starships'>
                {starshipsSW.results ? starshipsSW.results.map(starship => <CardStarships title={starship.name} info={starship}/>): <LoadingComponent/>}
            </div>
        </div>
    )
}