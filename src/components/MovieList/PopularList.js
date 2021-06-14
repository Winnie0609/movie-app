import React, {useState, useEffect } from 'react'
import { Container, LatestList, LatestContainer } from "./MovieList_styles"
import ContentModal from '../ContentModal/ContentModal'
import ShowContentModal from '../ContentModal/Show_ContentModal'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function PopularList(){
    const movie_url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const show_url = `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`

    const [ popular, setPopular ] = useState("movie") 
    const [ popularMovies, setPopularMovies ] = useState([]) 
    const [ popularShows, setPopularShows ] = useState([]) 
    const [ movieActive, setMovieActive ] = useState(true)
    const [ showActive, setShowActive ] = useState(false)

    async function fetchMovies(){
        const res = await fetch(movie_url)
        const data = await res.json()
        setPopularMovies(data)
        // console.log(popularMovies.results)
    }

    async function fetchShows(){
        const res = await fetch(show_url)
        const data = await res.json()
        setPopularShows(data)
    }

    useEffect(() => {
        fetchMovies()
        fetchShows()
    },[])

    function movieClicked(){
        setPopular("movie")
        setMovieActive(true)
        setShowActive(false)
    }

    function showClicked(){
        setPopular("show")
        setShowActive(true)
        setMovieActive(false)
    }

    return(
        <>
            <LatestContainer>
                <h2>Popular</h2>
                <button onClick={ movieClicked } className={movieActive? "btn movieBtn active": "btn movieBtn"}>Movie</button>
                <button onClick={ showClicked } className={showActive? "btn showBtn active": "btn movieBtn"}>Tv Show</button>
            </LatestContainer>

            {popular === "movie" ? 
            <Container>
                <LatestList>
                    {popularMovies.results && popularMovies.results.map((movie) => (
                    <ContentModal id={movie.id} genre="movie">
                        <div key={movie.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                alt={movie.title} 
                                onError={(e) => {e.target.onerror = null; 
                                    e.target.src="https://i.postimg.cc/kMkr3DPH/missing-photo2.png"}
                                }
                            />
                            <h3 className="movie_title">{movie.title}</h3>
                            <p className="movie_date" >{movie.release_date}</p>
                        </div>
                    </ContentModal>
                    ))}
                </LatestList>
            </Container>
            
            :
            
            <Container>
                <LatestList>
                    {popularShows.results && popularShows.results.map((show) => (
                    <ShowContentModal tvId={show.id} genre="tv">
                        <div key={show.id} className="inde-card">
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} 
                                alt={show.title} 
                                onError={(e) => {e.target.onerror = null; 
                                    e.target.src="https://i.postimg.cc/kMkr3DPH/missing-photo2.png"}
                                }
                                />
                            <p>{show.id}</p>
                            <h3 className="movie_title">{show.name}</h3>
                            <p className="movie_date">{show.first_air_date}</p>
                        </div>
                     </ShowContentModal>
                    ))}
                </LatestList>
            </Container>
            }
        </>
    )
}

export default PopularList