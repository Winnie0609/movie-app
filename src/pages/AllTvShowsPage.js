import React from 'react'
import Footer from '../components/Footer'
import NavBar from "../components/Header/NavBar"
import AllTvShows from "../components/All/AllTvShows"

function AllTvShowsPage(){
    return(
        <>
            <NavBar />
            <AllTvShows />
            <div style={{height:"100px"}}></div>
            <Footer/>
        </>
    )
}

export default AllTvShowsPage