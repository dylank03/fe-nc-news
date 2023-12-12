import { getArticleById } from "./api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comments from './Comments'
import { patchVotes } from "./api"

const ArticlePage = ()=>{

    const[article, setArticle] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()

    const handleClick = (articleId)=>{
        patchVotes(articleId)

        setArticle((currArticle)=>{
            return {...currArticle, votes: article.votes +1}
        })
    }

    useEffect(()=>{
        getArticleById(article_id).then((articleData)=>{
            setArticle(articleData.article)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return<h1>Loading...</h1>
    }
    return(<div className="single_article"><h1>{article.title}</h1><img src = {article.article_img_url}/><h3>Author: {article.author}</h3><h3>Topic: {article.topic}</h3><h3>Comments: {article.comment_count}</h3><button onClick={(event)=>{handleClick(article_id)}}>votes: {article.votes}</button><p>{article.body}</p> <Comments/></div>)
}

export default ArticlePage