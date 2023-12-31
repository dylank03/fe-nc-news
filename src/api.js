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

const postComment = (articleId, newComment, user)=>{
    return newsApi
    .post(`/articles/${articleId}/comments`, {author: user, body: newComment})
    .then(({data})=>{
        return data
    })
}

const getUsers = ()=>{
    return newsApi
    .get('/users')
    .then(({data})=>{
        return data
    })}

const patchVotes = (articleId, vote) =>{
    return newsApi
    .patch(`/articles/${articleId}`, {inc_votes: vote})
    .then(({data})=>{
        return data.votes

    })}

const deleteComment = (commentId)=>{
    return newsApi
    .delete(`/comments/${commentId}`)
}


export default getArticles

export {getArticleById, getComments, patchVotes, postComment, getUsers, deleteComment}
