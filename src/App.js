import React from "react"
import { Switch, Route } from "react-router-dom"
import FavouritePage from "./pages/FavouritePage"
import HomePage from "./pages/Home"
import SearchPage from "./pages/SearchPage"
import AllMoviesPage from "./pages/AllMoviesPages"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route >

      <Route path="/Search">
        <SearchPage/>
      </Route>

      <Route path="/Movies">
          <AllMoviesPage/>
      </Route>

      <Route path="/Favourite">
        <FavouritePage/>
      </Route>

    </Switch>
  )
}

export default App
