import styled from "styled-components"

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`

export const NavBackground = styled.div`
    background-color: #032541;
`

export const Nav = styled.nav`
    padding: 20px 0px;
    margin: 0 20px;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #032541;
    max-width: 1300px;
    margin: 0 auto;
    color: #ffffff;
    min-width: 600px;
    

    .link,
    li,
    i{
        text-decoration: none;
        color: #fff;

        :hover{
            color: pink;
        }
    }
 
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .column-left{
        display: flex;
    }

    li{
        margin-left: 35px ;
        cursor: pointer;
    }

    img{
        margin-right: 15px;
        max-height: 23px;
    }

    .language{
        font-size: 10px;
        padding: 3px 5px;
        border: solid 2px #fff;
        border-radius: 5px;
    }

    i{
        color: #fff;
        font-size: 16px;
    }
`

export const Banner = styled.div`
    min-width: 600px;
    color: #ffffff;
    margin: 0 auto;
    width: 85%;
    height: 300px;
    background-image: url("${process.env.PUBLIC_URL}/image/banner.jpg");
    background-repeat: no-repeat;
    object-fit: cover;

    .tag-line{
        padding: 30px 70px;
        font-weight: 600;
    }

    h1{
        font-size: 2.7rem;
        margin-bottom: 0;
    }

    h2{
        font-size: 2rem;
        margin: 0;
        font-weight: 500;
    }

    @media(max-width: 1000px){
        width: 100%;
    }
`
