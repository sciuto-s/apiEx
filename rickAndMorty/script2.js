'use strict'
const episode = document.querySelector('.containerEpisode');
const next2 =document.querySelector('.next2');
const prev2 = document.querySelector('.prev2')
let pageEp=1;
const getEpisode = function () {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${pageEp}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            for (const ep of data.results) {
                episode.innerHTML += `
        <div class="card">
            <div class="heading">
                <h1 class="name">${ep.name}</h1>
                <div class="episode">${ep.episode} </div>
                <div class="air_date">${ep.air_date} </div>
                <option value="${[ep.characters]}"></option>
            </div>

        </div>`;

            }
            
        })
        episode.innerHTML =''
}
getEpisode()
next2.addEventListener('click', () => {
    pageEp++
   getEpisode()
})
prev2.addEventListener('click', () => {
   pageEp--
  getEpisode()
})