'use strict'
const container = document.querySelector('.container')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')


let page = 1;
const callApi= function (){
fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        container.innerHTML =''
        for (const character of data.results) {
            container.innerHTML += `<div class="card">
            <div class="imgBox">
                <img src="${character.image}" alt="">
            </div>
            <h1 class="name">${character.name}</h1>
            <div class="heading">
                <div class="species">Specie:<p> ${character.species}</p></div>
                <div class="gender">Gender:<p> ${character.gender}</p> </div>
                <div class="status">Status:<p> ${character.status}</p></div>
            </div>
        </div> `
        }
      
    })
} 
callApi()
    next.addEventListener('click', () => {
         page++
        callApi()
    })
    prev.addEventListener('click', () => {
        page--
       callApi()
   })