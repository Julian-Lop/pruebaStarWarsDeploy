import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPeople, getCharactersByFiml } from '../Redux/Actions/index.js'
import Card from './Card.js'
import LoadingComponent from './LoadingComponent.js'

export default function Films() {
    const dispatch = useDispatch()

    const filmSW =  useSelector((state) => state.films)
    const characterSW = useSelector((state) => state.characters)

    const [flag, setflag] = useState(false)

    useEffect(() => {
        const functionAsync = async () =>{
            if(filmSW.results && characterSW.length < 79){
                for(let i=1; i < 9; i++){
                await dispatch(getAllPeople(i)) 
                }
            setflag(true)
            }
        }
        functionAsync()
    },[filmSW])

    useEffect(() => {
        if(flag){
            dispatch(getCharactersByFiml())
            setflag(false)
        }
    },[flag])

    return (
        <div className='Container'>
            <h1>Films <i class="fas fa-film"></i></h1>
            <div className='Films'>
                {filmSW.results ? filmSW.results.map(film => <Card key={film.episode_id} title={film.title} info={ characterSW ? film.people : null}/>): <LoadingComponent/>}
            </div>
        </div>
    )
}