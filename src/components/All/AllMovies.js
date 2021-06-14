import React, {useState, useEffect} from 'react'
import { Container, MovieCard } from "./AllMovie_styles"
import CustomPagination from "../CustomPagination/CustomPagination"
import ContentModal from '../ContentModal/ContentModal'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function AllMovies(){
    const [AllMovies, setAllMovies] = useState([]) 
    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState()
    
    const all_movie_url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`

    async function fetchAllMovies() {
        const res = await fetch(all_movie_url)
        const data = await res.json()
        setAllMovies(data)
        setNumOfPages(data.total_pages)
        console.log(numOfPages)
        // console.log(AllMovies)
    }

    useEffect(() => {
        fetchAllMovies()
        window.scroll(0,0)
    }, [page])

    return(
        <Container>
            <h2>Top Rated Movies</h2>
        
            {AllMovies.results && AllMovies.results.map((movie) => (
                // <ContentModal key={movie.imdb_id} id={movie.id} page={page} setPage={setPage} genre="movie">
                    <MovieCard>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.title} 
                            onError={(e) => {e.target.onerror = null; 
                                e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                            }
                        />

                        <div className="movie_info">
                            <h3 className="movie_title">{movie.title}</h3>
                            <p className="movie_date" >{movie.release_date}</p>
                            <p className="movie_overview" >{movie.overview}</p>
                        </div>
                    </MovieCard> 
                // </ContentModal >
            ))}
            {/* {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numberOfPages={numOfPages}/>
            )} */}
            
                <CustomPagination setPage={setPage}/>
           
            
            <span 
                onClick={() => window.scroll(0, 0)}>
                <i className="fas fa-arrow-circle-up"></i>
            </span>
        </Container>
    )
}

export default AllMovies