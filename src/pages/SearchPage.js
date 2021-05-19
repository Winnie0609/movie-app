import React from 'react'
import Header from "../components/Header/Header"
import NavBar from "../components/Header/NavBar"
import Search from "../components/Search/Search"
import Footer from "../components/Footer"

function SearchPage(){
    return(
        <>
            <NavBar />
            <Header />
            <Search />
            <div style={{height:"200px"}}></div>
            <Footer />
        </>
    )
}

export default SearchPage