import { getArticleById } from "./api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ArticlePage = ()=>{

    const[article, setArticle] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()

    useEffect(()=>{
        getArticleById(article_id).then((articleData)=>{
            setArticle(articleData.article)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return<h1>Loading...</h1>
    }
    return(<><h1>{article.title}</h1><img src = {article.article_img_url}/><h3>Author: {article.author}</h3><h3>Topic: {article.topic}</h3><h3>Comments: {article.comment_count}</h3><h3>votes: {article.votes}</h3><p>{article.body}</p></>)
}

export default ArticlePage