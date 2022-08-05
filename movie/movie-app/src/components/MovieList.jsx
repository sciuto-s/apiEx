import React from "react";

const MovieList = (props) => {
  const { movies } = props;
  return (
    <>
      {movies.map((movie, i) => (
        <div className="image-container justify-content-center col m-3" key={i}>
          <img src={movie.Poster} alt="" />
          <div className="overlay d-flex align-items-center justify-content-center"></div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
