import React from 'react'
import { NavBackground, Nav } from "./header_styles"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <NavBackground>
            <Nav>
                <div className="column-left">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="logo" />
                    </Link> 
                    <ul className="nav-left">
                        <Link to="/Movies" className="link">
                            <li>Movies</li>
                        </Link>

                        <Link to="/TvShows" className="link">
                            <li>TV shows</li>
                        </Link>
                            
                            <li>More</li>
                    </ul>
                </div>

                <div className="column-right">
                    <ul>
                        <li className="language">EN</li>
                            <li><Link to="/Favourite"><i className="far fa-heart link"></i></Link></li>
                            <li><Link to="/Search"><i className="fas fa-search link"></i></Link></li>
                            <li><Link to="/SignIn"><i className="far fa-user"></i></Link></li>  
                    </ul>
                </div>
            </Nav>
        </NavBackground>
    )
}

export default NavBar