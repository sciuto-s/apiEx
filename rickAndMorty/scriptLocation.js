const locations = document.querySelector('.containerLocation');
const next3 = document.querySelector('.next2');
const prev3 = document.querySelector('.prev2')
const results = document.querySelector('.results');
let pageLo = 1;
const getLocation = function () {
    fetch(`https://rickandmortyapi.com/api/location/?page=${pageLo}`)
        .then(resp => resp.json())
        .then(data => {
            results.innerHTML=''
            for (const location of data.results) {
             results.innerHTML += `
             <tr>
                <th scope="row">${location.name}</th>
                <td data-title="type">${location.type}</td>
                <td data-title="dimension">${location.dimension}</td>
                <td data-title="residents"><a href="./resident.html">residents</a></td>
               
              </tr>
             `
            }
        }
        )
}
getLocation()
next3.addEventListener('click', () => {
    pageLo++
    getLocation()
})
prev3.addEventListener('click', () => {
    pageLo--
    getLocation()
})