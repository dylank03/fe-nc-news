import { getArticleById } from "./api"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comments from './Comments'
import { patchVotes } from "./api"
import {Button} from '@nextui-org/react'

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


    if(isLoading){
        return<h1>Loading...</h1>
    }
    return(<div className="single_article"><h1 className="article_title">{article.title}</h1><img className = "article_img" src = {article.article_img_url}/><h3>Author: {article.author}</h3><h3>Topic: {article.topic}</h3><h3>Comments: {commentNumber}</h3><Button color ='danger' onPress={(event)=>{handleClick(article_id, -1)}}>downvote</Button><Button color ='success' onPress={(event)=>{handleClick(article_id, 1)}}>upvote</Button>{err ? <p>{err}</p> : null} <p>votes: {article.votes}</p><p>{article.body}</p>  <Comments setCommentNumber={setCommentNumber}/></div>)
}

export default ArticlePage