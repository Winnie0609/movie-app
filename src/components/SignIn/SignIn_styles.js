import styled from "styled-components"

export const Background = styled.div`
    background-image: url("${process.env.PUBLIC_URL}/image/bg-img3.jpg");
    background-repeat: no-repeat;
    object-fit: cover;
    padding: 0;
    width: 100%;
    height: 90.8vh;
    position: absolute;
    z-index: -10;
`

export const Container = styled.div`
    position: absolute;
    right: 15%;
    top: 20%;
    height: 508px;
    background-color: #fff;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: -1px 1px 17px 0px #03254124;
    
    .content{
        min-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 508px;
        padding: 20px;
    }

    h1{
       font-size: 25px;
       font-weight: 400; 
       margin-bottom: 30px 0 0 0;
    }

    .title-highlight{
        color: #BA0D3E;
        font-weight: 600;
    }

    .grey{
        color: #7B7B7B;
    }

    .small-word{
        font-size: 12px;
        margin: 20px 0;
    }

    .no-margin-bottom{
        margin-bottom: 0;
    }

    .icon{
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        cursor: pointer;
        color: grey;
    }

    .fab{
        border: 1.4px solid grey;
        padding: 7px;
        border-radius: 30px;
    }

    .fa-facebook-f{
        padding: 8px 10px 5px 10px;
    }

    .fa-tumblr{
        padding: 7px 11px 5px 9px;
    }

    .fa-google:hover{
        background-color: #FF4105;
        color: #FFF;
        border: 1.4px solid #FF4105;
    }

   
    .fa-facebook-f:hover{
        background-color: #4A6EB5;
        color: #FFF;
        border: 1.4px solid #4A6EB5;
    }

    .fa-twitter:hover{
        background-color: #1C9CEA;
        color: #FFF;
        border: 1.4px solid #1C9CEA;
    }

    .fa-tumblr:hover{
        background-color: #334459;
        color: #FFF;
        border: 1.4px solid #334459;
    }

    .login{
        width: 90%;
    }

    .email,
    .password{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label{
        margin-bottom: 7px;
        font-weight: 500;
    }

    input{
        padding: 9px;
        border: 1px solid #C4C4C4;
        border-radius: 7px;
        outline: none;
    }

    button{
        width: 100%;
        height: 38px;
        background-color: #032541;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        transition: 10ms;
    }

    button:hover{
        box-shadow: 0px 4px 18px 0px #00000040;
    }
    
    .flip{
        cursor: pointer;
        color:  #BA0D3E;
    }

    .flip:hover{
        text-decoration: underline;
    }

    .label{
        display: block;
        position: relative;
        cursor: pointer;
        margin: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none; 
    }
`

