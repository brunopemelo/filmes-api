import axios from 'axios'

// https://api.themoviedb.org/3/movie/550?api_key=d0015a5bf82d965fda69ef7f209dd27c

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api
