import React from 'react'
import Footer from '../components/Footer'
import NavBar from "../components/Header/NavBar"
import AllMovies from "../components/All/AllMovies"

function AllMoviesPage(){
    return(
        <>
            <NavBar />
            <AllMovies />
            <div style={{height:"100px"}}></div>
            <Footer/>
        </>
    )
}

export default AllMoviesPage