import axios from 'axios'

const newsApi = axios.create({baseURL: 'https://ncnewshostserver.onrender.com/api'})

const getArticles = ()=>{
    return newsApi
    .get("/articles")
    .then((response) => {
        return response.data;
    }).catch((err)=>{
        console.log(err)
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

const getComments = (articleId)=>{
    return newsApi
    .get(`/articles/${articleId}/comments`)
    .then((response)=>{
        return response.data
    }).catch((err)=>{
        console.log(err)
    })
}

const patchVotes = (articleId) =>{
    console.log(articleId)
    return newsApi
    .patch(`/articles/${articleId}`, {inc_votes: 1})
    .then(({data})=>{
        return data.votes
    }).catch((err)=>{
        console.log(err)
    })
}

export default getArticles

export {getArticleById, getComments, patchVotes}
