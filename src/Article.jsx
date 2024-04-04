import { getArticleById } from "./api"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comments from './Comments'
import { patchVotes } from "./api"
import { left } from "@popperjs/core"

const ArticlePage = ()=>{

    const[article, setArticle] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    const[commentNumber, setCommentNumber] = useState(0)
    const[err, setError] = useState(null)

    const handleClick = (articleId, vote)=>{
        setError(null)
        const newVote = article.votes + vote
        setArticle((currArticle)=>{
            return {...currArticle, votes: newVote}
        })
        patchVotes(articleId, vote).catch((err)=>{
            setArticle((currArticle)=>{
                return {...currArticle, votes: newVote -vote}
            })
            setError('something went wrong, please try again later')
        })

    }

    useEffect(()=>{
        getArticleById(article_id).then((articleData)=>{
            setArticle(articleData.article)
            setIsLoading(false)
            setCommentNumber(+articleData.article.comment_count)
        })
    },[])

    const createdAt = new Date(article.created_at)


    if(isLoading){
        return<h1>Loading...</h1>
    }
    return(<div className="d-flex justify-content-center mt-5"><div className="w-md text-center"><div className="card px-16 py-4"><h1>{article.title}</h1><h5>Author: {article.author}</h5><img src = {article.article_img_url}/><h5>Topic: {article.topic}</h5><h5>created at: {createdAt.toDateString()}</h5><div className="d-flex align-items-center justify-content-center"><h5>{commentNumber}<i className="bi bi-chat-left-text px-2"></i></h5><button className="btn btn-success m-2" onClick={(event)=>{handleClick(article_id, 1)}}><i className="bi bi-hand-thumbs-up"></i></button>{err ? <p>{err}</p> : null}<h5>{article.votes}</h5><button className="btn btn-danger m-2" onClick={(event)=>{handleClick(article_id, -1)}}><i className="bi bi-hand-thumbs-down"></i></button></div> <p>{article.body}</p></div>  <Comments setCommentNumber={setCommentNumber}/></div></div>)
}

export default ArticlePage