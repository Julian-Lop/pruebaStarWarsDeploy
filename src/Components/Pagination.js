import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllStarships, getAllVehicles, resetState } from '../Redux/Actions/index'

export default function Pagination(){
    const dispatch = useDispatch()
    
    const starshipspage = useSelector((state) => state.starships)
    const vehiclespage = useSelector((state) => state.vehicles)

    const previousPage =  () => {
        if(window.location.href.includes('starships') && starshipspage.previous.substr(-1) !== null){
            dispatch(resetState('starships'))
            dispatch(getAllStarships(starshipspage.previous.substr(-1)))
        }else if(window.location.href.includes('vehicles') && vehiclespage.previous.substr(-1) !== null){
            dispatch(resetState('vehicles'))
            dispatch(getAllVehicles(vehiclespage.previous.substr(-1)))
        }
    }

    const nextPage = () => {
        if(window.location.href.includes('starships') &&  starshipspage.next.substr(-1) !== null){
            dispatch(resetState('starships'))
            dispatch(getAllStarships(starshipspage.next.substr(-1)))
        }else if(window.location.href.includes('vehicles') &&  vehiclespage.next.substr(-1) !== null){
            dispatch(resetState('vehicles'))
            dispatch(getAllVehicles(vehiclespage.next.substr(-1)))
        }
    }

    return(
        <div className="Pagination">
            <div> 
                <button onClick={previousPage}><i class="fas fa-caret-square-left"></i></button>
                <button onClick={nextPage} ><i class="fas fa-caret-square-right"></i></button>
            </div>
        </div>
    )
}