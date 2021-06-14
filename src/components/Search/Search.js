import React, { useState} from 'react'
import { Container, Form, SearchResult, Heart } from './Search_styles'
import ContentModal from '../ContentModal/ContentModal'


const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function Search(){
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

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    }

    const addFavourite = (item) => {
        const newFavouriteList = [...favouriteList, item]
        setFavouriteList(newFavouriteList)
        // saveToLocalStorage(newFavouriteList)
        saveToLocalStorage(favouriteList)
    }

    return(
        <Container>
            <Form onSubmit={ searchMovies }>
                <input 
                    type="text"
                    placeholder="Search a movie for today..."
                    name={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                
                <button type="submit">Search</button>
            </Form>

            <Container>
                <SearchResult>
                    {movie.map((item) => (
                        <div className="card-info" key={item.id}>
                            <ContentModal id={item.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                                alt={item.title} 
                                onError={(e) => {e.target.onerror = null
                                    e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                                }
                            />
                            
                            <div className="movie_info">
                                <h3 className="movie_title">{item.title}</h3>
                                <p className="movie_vote_average"><i className="fas fa-star"></i> {item.vote_average}</p>
                                <p className="movie_date">{item.release_date}</p>
                            </div>
                            </ContentModal>

                            <div className="heart" onClick={() => {addFavourite(item)}}>
                                <Heart>
                                    <i className='fa fa-heart' aria-hidden='true' ></i>
                                </Heart>
                            </div>
                        </div>
                    ))}

                </SearchResult>
                
                {movie.length !== 0 && (
                    <span 
                        onClick={() => window.scroll(0, 0)}>
                        <i className="fas fa-arrow-circle-up"></i>
                    </span>
                )}
            </Container>
        </Container>
    )
}

export default Search