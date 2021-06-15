import React, { createContext, useEffect, useState } from 'react'
const Context = createContext()

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY


function ContextProvider(props){
    const [ query, setQuery ] = useState("")
    const [ movie, setMovie ] = useState([])
    const [ favouriteList, setFavouriteList ] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    
        try{
            const res = await fetch(url)
            const data = await res.json()
            if(data.results) {
                setMovie(data.results)
            }
            console.log(movie)
        } 
        
        catch(err) {
            console.error(err)
        }
    }

    const addFavourite = (item) => {
        setFavouriteList(prevItems => [...prevItems, item])
    }

    const removeFavourite = (id) => {
        setFavouriteList(prevItems => prevItems.filter((item) => item.id !== id))
    }

    const clearFavourite = () => {
        setFavouriteList([])
    }

    return(
        <Context.Provider value={{favouriteList, setFavouriteList, addFavourite, removeFavourite, clearFavourite}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }