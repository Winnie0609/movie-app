import React, { useState } from "react"
import NavBar from "../components/Header/NavBar"
import Footer from '../components/Footer'
import Header from "../components/Header/Header"
import { Container, SearchResult } from "../components/Search/Search_styles"

function FavouritePage(){
    const [clearBtn, setClearBtn] = useState(true)

    let favouriteMovie = JSON.parse(localStorage.getItem("react-movie-app-favourites")) || []

    function Clearfavourite(){
        localStorage.clear()
        setClearBtn(false)
    }

    return(
        <>
            <NavBar />
            <Header />
            <Container>
                <div className="btn">
                    <h2>Liked Movie</h2>
                    {clearBtn ? 
                        <button className="clearBtn" onClick={() => Clearfavourite()}>Clear</button>
                    :
                        <button className="clearBtn" disabled>Clear</button>    
                    }
                </div>
            </Container>

            <SearchResult>
                {favouriteMovie.map((item) => (
                    <div className="card-info" >
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                        alt={item.title} 
                        onError={(e) => {e.target.onerror = null; 
                            e.target.src="https://i.postimg.cc/kMkr3DPH/missing-photo2.png"}
                        }
                    />
                    
                    <div className="movie_info">
                        <h3 className="movie_title">{item.title}</h3>
                        <p className="movie_vote_average"><i className="fas fa-star"></i> {item.vote_average}</p>
                        <p className="movie_date">{item.release_date}</p>
                    </div>
                </div>
                ))}
          </SearchResult>
          <div style={{height:"200px"}}></div>
          <Footer/>
        </>
    )
}

export default FavouritePage