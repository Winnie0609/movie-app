import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Info } from "./ContentModal_styles"

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

function ContentModal({children, id}) {

    const classes = useStyles()
    const [ open, setOpen ] = useState(false)
    const [ content, setContent ] = useState([])
    const [ video, setVideo ] = useState()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const all_movie_url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    const video_url = `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`

    async function fetchData() {
        const res = await fetch(all_movie_url)
        const data = await res.json()
        setContent(data)
        // console.log(data)
    }

    async function fetchVideo() {
        console.log(video_url)
        const res = await fetch(video_url)
        const data = await res.json()
        setVideo(data.results[0]?.key)
        // console.log(data)
    }

    useEffect(() => {
        fetchData()
        fetchVideo()
    },[])

    return (
        <div>
            <button 
                type="button" 
                onClick={handleOpen} 
                style={{margin:"0" , padding:"0", backgroundColor:"transparent", border:"none", cursor:"pointer"}}
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
                                    src={content.poster_path ? `https://image.tmdb.org/t/p/w500/${content.backdrop_path}` : "https://i.postimg.cc/kMkr3DPH/missing-photo2.png"} 
                                    alt={content.title}
                                />

                                <div className="movie_info">
                                    <div className="movie_header">
                                        <p className="movie_title">{content.title}</p>
                                        <p className="movie_date">({(content.release_date ||"-----").substring(0, 4)})</p>
                                        <p className="vote_overview"><i className="fas fa-star"></i>{content.vote_average}</p>
                                    </div>

                                    {content.tagline && (
                                        <p className="movie_tagline">{content.tagline}</p>
                                    )}

                                    <p className="movie_overview">{content.overview}</p>
                                    
                                    <button>
                                        <a 
                                            href={`https://www.youtube.com/watch?v=${video}`}
                                            target="__blank"
                                        > 
                                            <i className="fab fa-youtube"></i>
                                            Watch the Trailer
                                        </a>
                                    </button>
                                </div>
                            </>
                            )}
                        </Info>
                    </div>
                </Fade>
        </Modal>
        </div>
    );
}

export default ContentModal