import { useState, useEffect } from "react"
import getArticles from "./api"
import {getTopics} from "./api"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"


const Articles = ()=>{

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[topic, setTopic] = useSearchParams('')
    const[articleCount, setArticleCount] = useState(0)

    useEffect(() => {
        getArticles(topic).then((articleData) => {
            setArticles(articleData.articles);
            setArticleCount(articleData.article_count)
            setIsLoading(false)
        })
        getTopics()
    }, [topic]);

    if(isLoading){
        return(<h1>loading...</h1>)
    }

    return(<>
  <h5 className="ml-10 px-8">Choose Topic:</h5><div className="btn-group ml-10 px-8" role="group" aria-label="Basic radio toggle button group">
  <input onClick = {(event)=>{setTopic({topic: ''})}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked = {true}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

  <input onClick = {()=>{setTopic({topic: 'coding'})}} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Coding</label>

  <input onClick = {()=>{setTopic({topic: 'football'})}} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Football</label>

  <input onClick = {()=>{setTopic({topic: 'cooking'})}} type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio4">Cooking</label>

</div><h1>Articles</h1><ul className="articles_list">{articles.map((article)=>{
        return <li className="articles_list_item" key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul></>)

}



export default Articles