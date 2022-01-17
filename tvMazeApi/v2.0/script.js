'use strict'
const movie_container = document.querySelector('.movie-container');
const movie_amount = 80;


const fetchMovies = async () => {
    for (let i = 1; i <= movie_amount; i++) {
        await getMovie(i)
    }
}


const getMovie = async (id) => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
     if(data.status===404) return 
     else 
    createMovieCard(data)
}


const createMovieCard = (movie) => {
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    const genres = movie.genres
    console.log(genres)
  
    const rating = movie.rating
    
    const movieInnerHtml = `
    
     <div class="img-container">
        <img src="${movie.status===404 ? 'image' : movie.image.original}" alt="" >
    </div>
     <div class="genres">
        <p class="movie__tag--1">${genres[0] === undefined ? '' : genres[0].toString()}</p>
        <p class="movie__tag--2">${genres[1] === undefined ? '' : genres[1].toString()}</p>
        <p class="movie__tag--3">${genres[2] === undefined ? '' : genres[2].toString()}</p>
     </div>
        <div class="info">
            <h3 class="name"> ${movie.status===404 ? 'not found' : movie.name}</h3>
            
            <small class="rating">Rating:<span>${movie.status===404 ? '' : rating.average}</span></small>
            <div class="description"></div>
        </div>

    `
    if (movie.name === 'Not Found')
        movieEl.style.display = 'none'
    else
        movieEl.innerHTML = movieInnerHtml;
        movie_container.appendChild(movieEl)

}
fetchMovies()