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
        <div class="card" style="width: 18rem;">
            <img src="${cover}" class="card-img-top" alt="Imagen Caratula">
            <div class="card-body">
                <h3 class="card-title">${id}. ${title}</h3>
                <h5 class="card-title">Director : ${director}</h5>
                <h5 class="card-title">Genre : ${genre}</h5>
                <h5 class="card-title">Description : ${description}</h5>
                </div>
        </div>
        `
    }
})