const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGI2MDRhOGRkMmRkOWY5OGIwNDdkYzRmNWRlYTMwNyIsIm5iZiI6MTc3NzU1OTUzMS41NjQ5OTk4LCJzdWIiOiI2OWYzNjdlYjZkNDY1NTZkOGViNzIxN2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7npxWyEU6UXnx4APUvFFLrAUtpMmatya1bbelWCNzKY";

const opcoes = {
    method: "GET",
    headers: {
        accept: "application/json",
        AUTHORIZATION: `Bearer ${TOKEN}`
    }
};

const URL_FILMES = "https://api.themoviedb.org/3/movie/now_playing";
const URL_GENEROS = "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR";
const listaFilmes = document.getElementById("listaFilmes");

async function iniciarPagina() {
    const generos = await buscarGenero();
    await buscarFilmes(generos);
}

async function buscarGenero() {
    const resposta = await fetch(URL_GENEROS, opcoes);
    const dados = await resposta.json();
    return dados.genres;
}

function mostrarGenero(filme, generos) {
    const nomesDosGeneros = filme.genre_ids.map(function(idGenero) {
        const generoEncontrado = generos.find(function(genero) {
            return genero.id === idGenero;
        });

        if (generoEncontrado) {
            return generoEncontrado.name;
        }

        return "Gênero não encontrado";
    });

    return nomesDosGeneros.join(", ");
}

async function buscarFilmes(generos) {
    const resposta = await fetch(URL_FILMES, opcoes);
    const dados = await resposta.json();
    mostrarFilmes(dados.results, generos);
}

function mostrarFilmes(filmes, generos) {
    listaFilmes.innerHTML = "";

    for (let i = 0; i < filmes.length; i++) {
        const filme = filmes[i];
        const img = `https://image.tmdb.org/t/p/w185/${filme.poster_path}`;
        const textoGeneros = mostrarGenero(filme, generos);

        listaFilmes.innerHTML += `
            <div class="filme">
                <img src="${img}" alt="Pôster do filme ${filme.title}">
                <p id="title"><strong>${filme.title}</strong></p>
                <p><strong>Gêneros:</strong> ${textoGeneros}</p>
                <p>${filme.overview}</p>
            </div>
        `;
    }
}

iniciarPagina();