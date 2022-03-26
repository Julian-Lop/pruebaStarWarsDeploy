import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Films from './Components/Films';
import Starships from './Components/Starships';
import Vehicles from './Components/Vehicles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilms, getAllPlanets, getAllStarships, getAllVehicles, starshipsForMaping, vehiclesForMaping } from './Redux/Actions';
import '../src/css/styles.css'
import Pagination from './Components/Pagination';
import Home from './Components/Home';

function App() {
  const dispatch = useDispatch()

  const planet = useSelector((state) => state.planets)
  const starshipsmap = useSelector((state) => state.starshipsformaping)
  const vehiclesmap = useSelector((state) => state.vehiclesformpaing)

  useEffect(() => {
    dispatch(getAllFilms())
    dispatch(getAllStarships())
    dispatch(getAllVehicles())
    if(!planet.length){
      for(let i=1; i< 7; i++){
        dispatch(getAllPlanets(Number(i)))
      }
    }
    if(!starshipsmap.length){
      for(let i=1; i< 5; i++){
        dispatch(starshipsForMaping(Number(i)))
      }
    }
    if(!vehiclesmap.length){
      for(let i=1; i < 5; i++){
        dispatch(vehiclesForMaping(i))
      }
    }
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Navbar/>}/>
      </Routes>  
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/films' element={<Films/>}/>
        <Route exact path='/starships' element={<><Pagination/><Starships/></>}/>
        <Route exact path='/vehicles' element={<><Pagination/><Vehicles/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
