import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3
//URL DA API:/movie/now_playing?api_key=2da045a5ea0375fce74de5072f0bfe01&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;
