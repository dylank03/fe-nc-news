import axios from 'axios'

const newsApi = axios.create({baseURL: 'https://ncnewshostserver.onrender.com/api'})

const getArticles = ()=>{
    return newsApi
    .get("/articles")
    .then((response) => {
        return response.data;
    });
}

export default getArticles