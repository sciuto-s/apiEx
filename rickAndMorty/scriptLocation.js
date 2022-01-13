const locations = document.querySelector('.containerLocation');
const next3 =document.querySelector('.next2');
const prev3 = document.querySelector('.prev2')
let pageLo=1;
const getLocation = function () {
    fetch(`https://rickandmortyapi.com/api/location/?page=${pageLo}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
         
            }      
        )}
getLocation()
next3.addEventListener('click', () => {
    pageLo++
   getLocation()
})
prev3.addEventListener('click', () => {
   pageLo--
  getLocation()
})