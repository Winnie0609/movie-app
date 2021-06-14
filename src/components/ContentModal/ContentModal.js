import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Info } from "./ContentModal_styles"
import Carousel from "../Carousel/Carousel"
import '../../index.css'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        width: "450px",
        borderRadius: "12px",
        boxShadow: theme.shadows[5],
        overflow: "hidden",
    },
}));

function ContentModal({children, id, page, setPage}) {
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)
    const [ content, setContent ] = useState()
    const [ video, setVideo ] = useState()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const all_movie_url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    const video_url = `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`

    async function fetchData() {
        const res = await fetch(all_movie_url)
        const data = await res.json()
        setContent(data)
    }

    async function fetchVideo() {
        const res = await fetch(video_url)
        const data = await res.json()
        if(data.results[0]){
            setVideo(data.results[0]?.key)
        }
    }

    useEffect(() => {
        fetchData()
        fetchVideo()
    },[])

    return (
        <>
        <div>
            <button 
                type="button" 
                onClick={handleOpen} 
                style={{margin:"0" , padding:"0", backgroundColor:"transparent", border:"none", cursor:"pointer", width:"100%"}}
            >
                {children}
            </button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <div className={classes.paper}>
                        <Info>
                            {content && (
                            <>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                                    alt={content.title}
                                    onError={(e) => {e.target.onerror = null; 
                                        e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}}
                                   
                                />
                                
                                <div className="movie_info">
                                    <div className="movie_header">
                                        <p className="movie_title">{content.title}</p>
                                        <p className="movie_date">({(content.release_date ||"-----").substring(0, 4)})</p>
                                        <p className="vote_overview"><i className="fas fa-star"></i>{content.vote_average}</p>
                                    </div>

                                    {content.tagline && (<p className="movie_tagline">{content.tagline}</p>)}
                                    <p className="movie_overview">{content.overview}</p>
                                    
                                    <Carousel id={id} genre="movie"/>
                                    
                                    {video && 
                                        <a 
                                            href={`https://www.youtube.com/watch?v=${video}`}
                                            target="__blank"
                                        > 
                    
                                        <button>
                                            <i className="fab fa-youtube"></i>
                                            Watch the Trailer
                                        </button>
                                        </a>
                                    }
                                </div>
                            </>
                            )}
                        </Info>
                    </div>
                </Fade>
        </Modal>
        </div>
        </>
    )       
}

export default ContentModal