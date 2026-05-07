# Trabalho Prático — Filmes em Cartaz

**Disciplina:** Desenvolvimento em JavaScript  
**Professor:** Romulo Pereira  
**Tema:** Consumo de API com JavaScript

## Contexto

O(a) namorado(a), esposo(a) ou aquele crush especial convidou você para ir ao cinema, mas comentou que ficou confuso diante de tantas opções disponíveis.
Então, cheio(a) de entusiasmo e iniciativa, você responde com confiança:

> "Deixa comigo! Vou criar um sistema simples e organizado para facilitar essa escolha."

## Desafio

Nesta atividade, você deverá iniciar a construção de um sistema simples para listar filmes em cartaz utilizando a API do **The Movie Database — TMDB**.

O professor irá disponibilizar o **HTML** e o **CSS** prontos. Portanto, nesta primeira parte, sua tarefa será trabalhar no arquivo JavaScript da aplicação.

## Objetivo da primeira parte

O objetivo desta etapa é fazer a página buscar os filmes em cartaz automaticamente quando for aberta no navegador.

Nesta primeira entrega, o mais importante é conseguir realizar a requisição para a API e visualizar o retorno dos filmes no console do navegador.

## O que deve ser feito

| Etapa | Descrição |
|---|---|
| 1 | Abrir o projeto disponibilizado pelo professor. |
| 2 | Localizar o arquivo JavaScript da aplicação. |
| 3 | Configurar a chamada para a API do TMDB. |
| 4 | Buscar os filmes em cartaz. |
| 5 | Exibir o resultado da API no console do navegador. |

## API utilizada

Nesta primeira parte, será utilizado o endpoint de filmes em cartaz do TMDB.

**Filmes em cartaz:**  
`https://developer.themoviedb.org/reference/movie-now-playing-list`

## Dados importantes

Ao consultar a API, observe principalmente os seguintes dados dos filmes.

| Campo | O que representa |
|---|---|
| `title` | Título do filme. |
| `poster_path` | Caminho da imagem do pôster. |
| `release_date` | Data de lançamento. |
| `genre_ids` | Identificadores dos gêneros do filme. |

## Entrega esperada

Ao final desta primeira parte, o aluno deverá conseguir abrir a página, executar o JavaScript e visualizar no console do navegador a lista de filmes retornada pela API.

Se houver tempo, o aluno poderá iniciar a exibição dos filmes na tela, mostrando pelo menos o título e a imagem do pôster.

## Próximos passos

Nas próximas etapas, o projeto será evoluído para exibir os filmes na página, mostrar os gêneros dos filmes e criar um filtro de pesquisa pelo título.
