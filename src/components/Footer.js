import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Foot = styled.footer`
    min-width: 600px;
    background-color: #032541;

    img{
        margin-top: 20px;
    }

    ul{
        display:flex;
        list-style-type: none;
        padding: 0;
        margin: 20px 0;
    }

    li{
        margin: 0 10px;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        fonr-size: 10px;
    }

    li:first-child{
        margin-left: 0;
    }

    li:hover{
        color: pink;
    }

    @media(max-width:600px){
        position: fixed; 
        bottom: 0px; 
        left: 0px; 
        right: 0px; 
        overflow: hidden;
    }
`

function Footer(){
    return(
        <Foot>
            <Container>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="logo" />
                </Link> 

                <ul className="nav-left">
                <Link to="/Movies" style={{textDecoration:"none"}}>
                    <li>Movies</li>
                </Link>
                    <li>TV shows</li>
                    <li>More</li>
                </ul> 

            </Container>
        </Foot>
    )
}

export default Footer