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

let todosOsFilmes = [];
let todosOsGeneros = [];

async function iniciarPagina() {
    todosOsGeneros = await buscarGenero();
    todosOsFilmes = await buscarFilmes();
    mostrarFilmes(todosOsFilmes);
}

async function buscarGenero() {
    const resposta = await fetch(URL_GENEROS, opcoes);
    const dados = await resposta.json();
    return dados.genres;
}

async function buscarFilmes() {
    const resposta = await fetch(URL_FILMES, opcoes);
    const dados = await resposta.json();
    return dados.results;
}

function filtrarFilmes() {
    const input = document.querySelector("input");
    const textoDigitado = input.value.toLowerCase();

  
    const filmesFiltrados = todosOsFilmes.filter(function(filme) {
        const titulo = filme.title.toLowerCase();
        const descricao = filme.overview.toLowerCase();
        
        return titulo.includes(textoDigitado) || descricao.includes(textoDigitado);
    });

    mostrarFilmes(filmesFiltrados);
}

function obterTextoGeneros(filme, generos) {
    const nomesDosGeneros = filme.genre_ids.map(function(idGenero) {
        const generoEncontrado = generos.find(function(genero) {
            return genero.id === idGenero;
        });
        return generoEncontrado ? generoEncontrado.name : "Gênero não encontrado";
    });

    return nomesDosGeneros.join(", ");
}

function mostrarFilmes(filmes) {
    listaFilmes.innerHTML = "";

    for (let i = 0; i < filmes.length; i++) {
        const filme = filmes[i];
        const img = `https://image.tmdb.org/t/p/w185/${filme.poster_path}`;
        
       
        const textoGeneros = obterTextoGeneros(filme, todosOsGeneros);

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