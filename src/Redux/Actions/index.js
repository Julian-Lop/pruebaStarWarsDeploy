import axios from 'axios'
import {
    GET_ALL_FILMS,
    GET_ALL_STARSHIPS,
    GET_ALL_VEHICLES,
    RESET_STATE,
    GET_ALL_PEOPLE,
    GET_CHARACTERS_BY_FILM,
    GET_ALL_PLANETS,
    STARSHIPS_FOR_MAPING,
    VEHICLES_FOR_MAPING
} from '../Actions/types.js'

export const getAllFilms = () => {
    return async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/films/?format=json`)
            return dispatch({type: GET_ALL_FILMS, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllStarships = (page) => {
    return  async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/starships/?page=${page?page:1}`)
            return dispatch({type: GET_ALL_STARSHIPS, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllVehicles = (page) => {
    return async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/vehicles/?page=${page?page:1}`)
            return dispatch({type: GET_ALL_VEHICLES, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}


export const resetState = (info) => {
    return function(dispatch){
        return dispatch({type: RESET_STATE, payload:info})
    }
}


export const getAllPeople = (page) => {
    return async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/people/?page=${page}`)
            return dispatch({type: GET_ALL_PEOPLE, payload:json.data.results})
        } catch (error) {
            
        }
    }
}


export const getCharactersByFiml = () => {
    return function(dispatch){
        return dispatch({type: GET_CHARACTERS_BY_FILM, payload: null})
    }
}


export const getAllPlanets = (page) => {
    return async function(dispatch){
        try {
            let json =  await axios(`${process.env.REACT_APP_URL_SWAPI}/planets/?page=${page}`)
            return dispatch({type: GET_ALL_PLANETS, payload: json.data.results})
        } catch (error) {
            
        }
    }
}

export const starshipsForMaping = (page) => {
    return  async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/starships/?page=${page?page:1}`)
            return dispatch({type: STARSHIPS_FOR_MAPING, payload: json.data.results})
        } catch (error) {
            console.log(error)
        }
    }
}


export const vehiclesForMaping = (page) => {
    return async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/vehicles/?page=${page?page:1}`)
            return dispatch({type: VEHICLES_FOR_MAPING, payload: json.data.results})
        } catch (error) {
            console.log(error)
        }
    }
}