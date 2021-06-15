import styled from "styled-components"

// search bar

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
   
    span{
        position: relative;
        left: 90%;
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

    h2{
        margin-left: 30px;
    }

    .btn{
        display: flex;
        align-items: center;    
    }

    .clearBtn{
        margin-left: 30px;
        background-color: #fff;
        border: 2px solid #000000;
        cursor: pointer;
        border-radius: 20px;
        margin-right: 15px;
        padding: 4px 15px;
    }

    .clearBtn:hover{
        background-color: #000000;
        color: #fff;
        border: 2px solid #000000;
    }

    .clearBtn:disabled,
    .clearBtn[disabled]{
        color: grey;
        margin-left: 30px;
        background-color: #fff;
        border: 2px solid grey;
        cursor: pointer;
        border-radius: 20px;
        margin-right: 15px;
        padding: 4px 15px;
    }

    .clearBtn:disabled:hover{
        color: grey;
    }
`

export const Form = styled.form`
    margin: 15px auto;
    display: flex;
    justify-content: center;
    min-width: 600px;
    max-width: 1290px;
    
    input{
        margin: 0 auto;
        width: 1300px;
        min-width: 480px;
        height: 45px;
        margin: 0 auto;
        border: none;
        text-indent: 20px;
        outline: none;
        font-size: 18px;
        border: 2px solid #E72626;
        box-sizing: border-box;
    }    

    input::placeholder{
        font-size: 18px;
    }

    button{
        font-size: 18px;
        height: 45px;
        border: none;
        padding: 0 30px;
        cursor: pointer;
        background-color: #E72626;
        color: #fff;
    }

    button:hover,
    button:focus {
        background-color: #E72626;
        color: #fff
    }

    @media(max-width:600px){
        form{
            width: 300%;
    }
`

//search result

export const SearchResult = styled.div`
    margin: 30px auto;
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .card-info{
        align-items: center;
        position: relative;
        width: 200px;
        height: 100%;
        margin: 17px;
    }

    img{
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
        cursor: pointer;
    }

    .movie_info{
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 200px;
        height: 99%;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.52);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s, visibility .2s;
        cursor: pointer;
        border-radius: 12px;
    }

    .card-info:hover .movie_info{
        visibility: visible;
        opacity: 1;
        box-shadow:
        0 0.3px 5.4px rgba(0, 0, 0, 0.11),
        0 0.9px 19.5px rgba(0, 0, 0, 0.132),
        0 4px 80px rgba(0, 0, 0, 0.14);
    }

    .movie_title{
        margin: 70px 10px 0 10px;
    }

    .movie_vote_average{
        margin-bottom: 0;
    }

    .fa-star{
        color: yellow;
    }

    .heart{
        position: absolute;
        top: 84%;
        left: 75%;   
    }

    @media(max-width:467px){
        img{
            width: 15rem;
            height: 22rem;
            object-fit: cover;
            border-radius: 12px;
            cursor: pointer;
        }

        .movie_info{
            width: 15rem;
            height: 22rem;
        }
    }

    
`
export const Heart = styled.div`
    position: absolute;
    top: -15%;
    left: 75%;    
    color: red;
    padding: 3px 11px;
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
`