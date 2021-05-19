import styled from "styled-components"

export const Info = styled.div`
    img{
        width: 100%;
        max-width: 800px;
        max-height: 200px;
        object-fit: cover;
    }

    .movie_info{
        padding: 0 25px;
        margin: 0;
    }

    .movie_header{
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .movie_title,
    .movie_date,
    .movie_tagline,
    .vote_overview{
        margin-bottom: 0;
    }
    
    .movie_title{
        font-weight: 600;
        margin-right: 10px;
        font-size: 14px;
    }

    .movie_date,
    .vote_overview,
    .movie_overview{
        font-size: 12px;
        margin-right: 10px;
    }

    .movie_tagline{
        font-size: 12px;
        color: grey; 
        text-align: center; 
    }

    .fa-star{
        color: yellow;
        margin-right: 5px;
    }

    button{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #032541;
        margin: 20px 0;
    }

    a{
        text-decoration: none;
        color: #ffffff;
        width: 100px;
    }

    i{
        margin-right: 10px;
    }
`