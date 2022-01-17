'use strict'

const container__characters = document.querySelector('.container__characters');
const inputSearch = document.querySelector('.inputSearch')
const btnSearch = document.querySelector('.btnSearch')

const emptyHTML = () => {
    container__characters.innerHTML = ''
}

const printCharacters = (character) => {
    const characterCard = document.createElement('div')
    characterCard.classList.add('character')

    const charactersInnerHtml = `
    <div class="img-container">
      <img
        src="${!character.img ? '' : character.img}"
        alt="" width="190" height="230"/>
    </div>
    <div class="info">
      <span class="nickname">${character.nickname}</span>
      <h3 class="name">${character.name}</h3>
      <p class="occupation" >${character.occupation[0]} <br> </p>
      <p class="status">${character.birthday === 'Unknown' ? '' : character.birthday} - ${character.status}</p>
      <small class="portrayed">Actor: <span>${character.portrayed}</span></small>
    </div>
    <button class="btn--episodes"> Episode </button>
  </div>
`

    characterCard.innerHTML = charactersInnerHtml;
    container__characters.appendChild(characterCard)

    const btnEpisodes = characterCard.querySelector('.btn--episodes')
    btnEpisodes.addEventListener('click', function () {

    })

}

const getAllCharacters = async function () {
    const fetchCharacter = await fetch('https://www.breakingbadapi.com/api/characters');
    const characters = await fetchCharacter.json()
    characters.map(character => {
        printCharacters(character)
    })
    btnSearch.addEventListener('click', (e) => {
        e.preventDefault()
        emptyHTML()
        getCharacterByName(inputSearch.value)
    })
}

const getCharacterByName = async (name) => {
    const fetchCharacter = await fetch(`https://www.breakingbadapi.com/api/characters?name=${inputSearch.value}`);

    const characterName = await fetchCharacter.json();
        (!name || characterName.length === 0) ? container__characters.innerHTML = '<p class="errMsg"> no match found <i class="fas fa-skull-crossbones"></i></p> ' : characterName.map((char) => printCharacters(char))

    inputSearch.value=''
}


getAllCharacters()