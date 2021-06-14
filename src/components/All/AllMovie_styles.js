import styled from "styled-components"

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto; 
    padding: 0 30px;

    span{
        position: relative;
        left: 105%;
        font-size: 40px;
        color: pink;
        opacity: 0.8;
        text-align: right;
        cursor: pointer;
        border: none;
        transition: .2s ease;
    }

    span:hover,
    span:focus{
        color: #032541;
    }
`

export const MovieCard = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    border: solid 1px rgba(128,128,128,0.7);

    img{
        width: 150px;
        // height: 150px;
        object-fit: cover;
        
    }
    
    .movie_info{
        margin-left: 30px;
        text-align: left;
    }

    .movie_title{
        margin: 0;
        font-size: 16px;
    }

    .movie_date{
        margin: 3px 0 0px 0;
        color: grey;
        font-size: 14px;
    }

    .movie_overview{
        font-size: 14px;
        margin-right: 20px;
    }

`

