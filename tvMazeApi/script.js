'use strict';

const inputValue = document.querySelector('.inputSearch');
const btnSearch = document.querySelector('.btnSearch');
const result = document.querySelector('.result');
const infoBtn = document.querySelector('.fa-book-open')


const getInfoById = (id) => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.summary);
            
        })
}

const getAllFilms = function () {
    fetch('https://api.tvmaze.com/shows')
        .then(resp => resp.json())
        .then(data => {
            result.innerHTML = ''
            for (const show of data) {
                result.innerHTML += `<figure class="movie--all">
                <div class="movie__hero">
                
                 <img src="${!show.image ? '' : show.image.medium}" alt="  👀" class="movie__img">
                 
                </div>
                <div class="movie__content--all">
                <div class="movie__title--all">
                    <h1 class="heading__primary">${!show.name ? 'No Title Found' : show.name}</h1>
                    <div class="tag">
                    <div class="movie__tag movie__tag--1">#${show.genres[0] === undefined ? '' : show.genres[0]}</div>
                    <div class="movie__tag movie__tag--2">#${show.genres[1] === undefined ? '' : show.genres[1]}</div>
                    <div class="movie__tag movie__tag--3">#${show.genres[2] === undefined ? '' : show.genres[2]}</div>
                    </div>
                </div>
                
                
                <div class="movie__details">
                    <p> ${!show.rating.average ? 'No rating info 🙉' : 'Rating: ' + show.rating.average + ' ⭐️'} </p>
                    <i class="fas fa-book-open" onClick = "getInfoById(${show.id})"></i>
                </div>
                </div>  
                </figure> `
                // console.log(show)
                
            }
            inputValue.value = ''
        })

}




getAllFilms()
// infoBtn.addEventListener('click',getInfo)

const apiCall = function () {
    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue.value}`)
        .then(resp => resp.json())
        .then((data) => {
            if (data.length === 0) {
                inputValue.value = ''
                throw new Error(result.innerHTML = `<i>No match found 🤷‍♀️</i>`)
            } else {
                result.innerHTML = ''
                for (const { show } of data) {
                    result.innerHTML += `<figure class="movie">
            <div class="movie__hero">
              <img src="${!show.image ? '' : show.image.medium}" alt="  👀" class="movie__img">
              
            </div>
            <div class="movie__content">
              <div class="movie__title">
                <h1 class="heading__primary">${!show.name ? 'No Title Found' : show.name}</h1>
                <div class="tag">
                <div class="movie__tag movie__tag--1">#${show.genres[0] === undefined ? '' : show.genres[0]}</div>
                <div class="movie__tag movie__tag--2">#${show.genres[1] === undefined ? '' : show.genres[1]}</div>
                <div class="movie__tag movie__tag--3">#${show.genres[2] === undefined ? '' : show.genres[2]}</div>
                </div>
              </div>
              <div class="movie__description">
                ${!show.summary ? 'No description info 🤦‍♂️' : show.summary}
              </div>
              <div class="movie__details">
                <p> ${!show.rating.average ? 'No rating info 🙉' : 'Rating: ' + show.rating.average + ' ⭐️'} </p>
              </div>
            </div>  
          </figure> `
                    console.log(show)
                }
                inputValue.value = ''
            }
        })
}

const readInput = function () {
    if ((!inputValue.value)) {
        return result.innerHTML = '<i>search something...🔍</i>'
    } else {
        apiCall()
    }
}

btnSearch.addEventListener('click', function (e) {
    e.preventDefault();
    readInput()
})


