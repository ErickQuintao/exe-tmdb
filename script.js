const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGI2MDRhOGRkMmRkOWY5OGIwNDdkYzRmNWRlYTMwNyIsIm5iZiI6MTc3NzU1OTUzMS41NjQ5OTk4LCJzdWIiOiI2OWYzNjdlYjZkNDY1NTZkOGViNzIxN2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7npxWyEU6UXnx4APUvFFLrAUtpMmatya1bbelWCNzKY";
const opcoes = {
    method: "GET",
    headers: {
        accept: "aplication/json",
        AUTHORIZATION: `Bearer ${TOKEN}`
    }
}

const URL_FILMES = "https://api.themoviedb.org/3/movie/now_playing";
const mensagem = document.getElementById("mensagem");
const listaFilmes = document.getElementById("listaFilmes")
function iniciarPagina(){
    console.log("iniciar");
    buscarFilmes();
}



async function buscarFilmes(){
    const resposta = await fetch(URL_FILMES,opcoes);
    const dados = await resposta.json();
    return mostrarFilmes(dados.results);
}
function mostrarFilmes(filmes){
    for(let i = 0;i< filmes.length;i++){
        filme = filmes[i];
        listaFilmes.innerHTML+=`
            <div class="filme">
                <p>${filme.title}</p>
                <p>${filme.overview}</p>
            </div>
        `;
    }
}
iniciarPagina();