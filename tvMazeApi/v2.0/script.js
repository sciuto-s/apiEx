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
    // if(data.status===404) return 
    // else 
    createMovieCard(data)
}


const createMovieCard = (movie) => {
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    const {...genres} = movie.genres
    
    console.log(genres)
    
    const movieInnerHtml = `
    
     <div class="img-container">
        <img src="${!movie.image ? 'image' : movie.image.original}" alt="" >
    </div>
     <div class="genres">
        <p> - - </p>
     </div>
        <div class="info">
            <h3 class="name"> ${movie.name==='Not Found' ? 'not found': movie.name}</h3>
            <p class="network">Network: </p>
            <small class="rating">Rating:<span></span></small>
            <div class="description"></div>
        </div>
    `
    movieEl.innerHTML = movieInnerHtml;
    movie_container.appendChild(movieEl)
}
fetchMovies()