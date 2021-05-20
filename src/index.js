import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import { HashRouter as Router} from "react-router-dom"
import GlobalStyle from "./components/GlobalStyles"
import App from './App'

ReactDOM.render(
    <Router>
      <GlobalStyle />
      <App />
    </Router>,
  document.getElementById('root')
);