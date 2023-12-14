import { useState, useEffect } from "react"
import getArticles from "./api"
import ArticleCard from "./ArticleCard"

const Articles = ()=>{

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)


    useEffect(() => {
    getArticles().then((articleData) => {
        setArticles(articleData.articles);
        setIsLoading(false)
    })
    }, []);

    if(isLoading){
        return(<h1>loading...</h1>)
    }

    return(<><h1>Articles</h1><ul className = "articles_list">{articles.map((article)=>{
        return <li key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul></>)
}



export default Articles