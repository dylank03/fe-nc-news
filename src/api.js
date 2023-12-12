import axios from 'axios'

const newsApi = axios.create({baseURL: 'https://ncnewshostserver.onrender.com/api'})

const getArticles = ()=>{
    return newsApi
    .get("/articles")
    .then((response) => {
        return response.data;
    });
}

const getArticleById = (articleId)=>{
    return newsApi
    .get(`/articles/${articleId}`)
    .then((response)=>{
        return response.data
    }).catch((err)=>{
        console.log(err)
    })
}

export default getArticles

export {getArticleById}
