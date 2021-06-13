import React, {useState, useEffect} from 'react'
import { Container, LatestList } from "./MovieList_styles"

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function LatestMovieList(){
    const latest_movie_url = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    const [ latestMovies, setLatestMovies ] = useState([]) 

    async function fetchLatestMovies(){
        const res = await fetch(latest_movie_url)
        const data = await res.json()
        setLatestMovies(data)
        console.log(latestMovies.results)
    }

    useEffect(() => {
        fetchLatestMovies()
    },[])

    return(
        <Container>
            <h2>Up Comming</h2>
            <LatestList>
                {latestMovies.results && latestMovies.results.map((movie) => (
                    <div key={movie.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.title} 
                            onError={(e) => {e.target.onerror = null; 
                                e.target.src="https://i.postimg.cc/kMkr3DPH/missing-photo2.png"}
                            }
                        />
                        
                        <h3 className="movie_title">{movie.title}</h3>
                        <p className="movie_date">{movie.release_date}</p>
                    </div>
                ))}
            </LatestList>
        </Container>
    )
}

export default LatestMovieList