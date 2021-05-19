import React from 'react'
import Footer from '../components/Footer'
import Header from "../components/Header/Header"
import NavBar from "../components/Header/NavBar"
import MovieList from "../components/MovieList/MovieList"
import PopularList from "../components/MovieList/PopularList"

function HomePage(){
    return(
        <>
            <NavBar />
            <Header />
            <MovieList />
            <PopularList/>
            <div style={{height:"100px"}}></div>
            <Footer/>
        </>
    )
}

export default HomePage