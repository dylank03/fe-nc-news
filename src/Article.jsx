import { getArticleById } from "./api"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comments from './Comments'
import { patchVotes } from "./api"

const ArticlePage = ()=>{

    const[article, setArticle] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
<<<<<<< HEAD
    const[commentNumber, setCommentNumber] = useState(0)
=======
    const[err, setError] = useState(null)
>>>>>>> 9a8be0e (added error handling and downvote)

    const handleClick = (articleId, vote)=>{
        patchVotes(articleId, vote).catch((err)=>{
            setArticle((currArticle)=>{
                return {...currArticle, votes: currArticle.votes -vote}
            })
            setError('something went wrong, please try again later')
        })
        setError(null)
        setArticle((currArticle)=>{
            return {...currArticle, votes: article.votes + vote}
        })
    }

    useEffect(()=>{
        getArticleById(article_id).then((articleData)=>{
            setArticle(articleData.article)
            setIsLoading(false)
            setCommentNumber(+articleData.article.comment_count)
        })
    },[])


    if(isLoading){
        return<h1>Loading...</h1>
    }
    return(<div className="single_article"><h1>{article.title}</h1><img src = {article.article_img_url}/><h3>Author: {article.author}</h3><h3>Topic: {article.topic}</h3><h3>Comments: {article.comment_count}</h3><button onClick={(event)=>{handleClick(article_id, -1)}}>downvote</button><button onClick={(event)=>{handleClick(article_id, 1)}}>upvote</button>{err ? <p>{err}</p> : null} <p>votes: {article.votes}</p><p>{article.body}</p><Comments setCommentNumber={setCommentNumber}/></div></div>)
}

export default ArticlePage