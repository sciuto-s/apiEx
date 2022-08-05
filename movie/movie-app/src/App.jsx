import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=450dc6fe`;
    const response = await fetch(url);
    const respJson = await response.json();

    respJson.Search && setMovies(respJson.Search);
  };

  //solo quando il searchValue cambia chiamo la funzione getMovieRequest
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center m-2">
        <MovieListHeading heading="search Movies" />
        <SearchBox
          className="row d-flex align-items-center mt-4 mb-4"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
