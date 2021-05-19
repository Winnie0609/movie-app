import styled from "styled-components"

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto; 
    padding: 0 30px;
`
export const Heart = styled.div`
    position: absolute;
    top: -12%;
    left: 70%;    
    color: red;
    padding: 3px 10px;
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
`

export const LatestContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto; 
    display: flex;
    align-items: center;
    padding: 0 30px;

    h2{
        margin-right: 30px;
    }

    .btn{
        position: abolute;
        padding: 3px 15px;
        background-color: #fff;
        border: 2px solid #000000;
        cursor: pointer;
        border-radius: 20px;
        margin-right: 15px;
    }

    .active,
    .btn:hover{
        background-color: #032541;
        color: #ffffff;
    }
`

export const LatestList = styled.div`
    display: flex;
    padding-bottom: 30px;
    cursor: pointer;

    overflow-x: scroll;
        ::-webkit-scrollbar
    {
        height: 7px;
        background-color:#F5F5F5;
    }

    ::-webkit-scrollbar-track
    {
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
        border-radius:10px;
        background-color: #DCDCDC;
    }

    div{
        margin: 0 10px;
        position: relative;
    }

    h3{
        font-size: 14px;
        margin: 0;
    }

    img{
        width: 150px;
        height: 210px;
        border-radius: 10px;
        object-fit: cover;
        transition: .3s;
    }

    img:hover{
        transform: scale(1.02);
    }

    .movie_date{
        margin: 5px 0;
        font-size: 10px;
}
`