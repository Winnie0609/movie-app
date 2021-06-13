import React, { useState , useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function Carousel({id}) {
    const cast_url = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    
    const [ cast, setCast] = useState([])

    const items = (cast.filter(item => item.profile_path)).map((item) =>
        <div className="carouselItem" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10px"}}>
        <img 
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            alt={item.name}
            style={{width:"70px", height:"75px", objectFit:"cover"}}
        />
        <p style={{fontSize:"8px"}}>{item.name}</p>
        </div>
    )
    
    const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 5,
        },
    }

    async function fetchCast() {
        const res = await fetch(cast_url)
        const data = await res.json()
        setCast(data.cast)
    }

    useEffect(() => {
        fetchCast()
    },[])

  return (
    <AliceCarousel 
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
    />
  )
}

export default Carousel