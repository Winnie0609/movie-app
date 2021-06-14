import React, { useState, useEffect } from "react"
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

function ShowContentModal(props) {
    const tvId = props.tvId
    const children = props.children
  
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)
    const [ tvContent, setTvContent ] = useState([])
    const [ tvVideo, setTvVideo ] = useState()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    
        const all_tv_url =`${API_URL}/tv/${tvId}?api_key=${API_KEY}&language=en-US`
        const tv_video_url = `${API_URL}/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`

    async function fetchTvData() {
        const res = await fetch(all_tv_url)
        const data = await res.json()
        setTvContent(data)
        // console.log(data.id)
    }

    async function fetchTvVideo() {
        const res = await fetch(tv_video_url)
        const data = await res.json()
        setTvVideo(data.results[0]?.key)
        // console.log(data)
    }

    useEffect(() => {
        fetchTvData()
        fetchTvVideo()
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
                            {tvContent && (
                            <>
                                <img 
                                    src={tvContent.backdrop_path ? `https://image.tmdb.org/t/p/w500/${tvContent.backdrop_path}` : "https://i.postimg.cc/kMkr3DPH/missing-photo2.png"} 
                                    alt={tvContent.name}
                                />

                                <div className="movie_info">
                                    <div className="movie_header">
                                        <p className="movie_title">{tvContent.name}</p>
                                        <p className="movie_date">({(tvContent.first_air_date ||"-----").substring(0, 4)})</p>
                                        <p className="vote_overview"><i className="fas fa-star"></i>{tvContent.vote_average}</p>
                                    </div>

                                    <p className="movie_overview">{tvContent.overview}</p>
                                    
                                    <Carousel id={tvId} genre="tv"/>

                                    <a 
                                        href={`https://www.youtube.com/watch?v=${tvVideo}`}
                                        target="__blank"
                                    > 
                   
                                    <button>
                                        <i className="fab fa-youtube"></i>
                                        Watch the Trailer
                                    </button>
                                    </a>
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

export default ShowContentModal