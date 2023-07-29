import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";
import MovieShow from "./MovieShow"; // Add the MovieShow component import

function App() {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([
    { id: 1, title: "A River Runs Through It", time: "120 mins", genres: ["Drama"] },
    { id: 2, title: "Se7en", time: "127 mins", genres: ["Crime", "Drama", "Mystery"] },
    { id: 3, title: "Inception", time: "148 mins", genres: ["Action", "Adventure", "Sci-Fi"] }
  ]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies/:movieId"> {/* Updates the Route path */}
          <MovieShow movies={movies} />
        </Route>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
