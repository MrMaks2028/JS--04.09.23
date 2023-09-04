const API_KEY = '486c76d3'


const form_el = document.querySelector('#form');
const search_el = document.querySelector('#search');
const type_el = document.querySelector('#type');
const result_el = document.querySelector('#result');

form_el.addEventListener('submit', e => {
    e.preventDefault();

    result_el.textContent = "";

    const searchStr = search_el.value;
    const typeStr = type_el.value;

    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchStr}&type=${typeStr}`;

    fetch(url)
        .then((response) => response.json())
        .then((filmList) => {
            filmList.Search.forEach(film => {
                result_el.insertAdjacentHTML('beforeend', `
                    <div>
                        <img src="${film.Poster}" />
                        <h2>${film.Title}</h2>
                        <p>${film.Year}</p>
                    </div>
                `);
            });
        })
});