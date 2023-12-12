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

    return(<><h1 className="article_list">Articles</h1><ArticleCard articles = {articles}/></>)
}



export default Articles