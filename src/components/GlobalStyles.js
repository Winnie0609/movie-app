import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    *{
        box-sizing: border-box;
    }
` 

export default GlobalStyle