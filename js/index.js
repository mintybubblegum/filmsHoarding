const requestURL = '../json/peliculas.json';


async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies =>{
    for (let index = 0; index < movies.peliculas.length ; index++)
    {
        const movieSection = document.getElementById('movieSection');
        
        let id = movies.peliculas[index].id;
        let cover = movies.peliculas[index].caratula;
        let title = movies.peliculas[index].titulo;
        let description = movies.peliculas[index].descripcion;
        let genre = movies.peliculas[index].genero;
        let director = movies.peliculas[index].director;

        movieSection.innerHTML += `
        <div class="card">
            <img class="coverImg" src="${cover}" alt="Imagen Caratula">
            <div class="cardBody">
                <h1 class="cardTitle">${id}. ${title}</h1>
                <h2 class="filmInfo">Director : ${director}</h2>
                <h2 class="filmInfo">Genre : ${genre}</h2>
                <h2 class="filmInfo">Description : ${description}</h2>
                </div>
        </div>
        `
    }
})