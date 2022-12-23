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
        let link = movies.peliculas[index].enlace;
        let title = movies.peliculas[index].titulo;
        let description = movies.peliculas[index].descripcion;
        let genre = movies.peliculas[index].genero;
        let director = movies.peliculas[index].director;

        movieSection.innerHTML += `
        <div class="card">
            <a href="${link}"><img class="coverImg" src="${cover}" alt="Imagen Caratula"></a>
            <div class="cardBody">
                <h1 class="cardTitle">${id}. ${title}</h1>
                <h2 class="filmInfoTop"><b>Director: </b>${director}</h2>
                <h2 class="filmInfoTop"><b>Genre: </b>${genre}</h2>
                <h2 class="filmInfo"><b>Description: </b>${description}</h2>
                </div>
        </div>
        `
    }
})