import { useState, useEffect } from "react"
import getArticles from "./api"
import {getTopics} from "./api"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"


const Articles = ()=>{

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[queries, setQueries] = useSearchParams({})
    const[articleCount, setArticleCount] = useState(0)

    useEffect(() => {
        getArticles(queries).then((articleData) => {
            setArticles(articleData.articles);
            setArticleCount(articleData.article_count)
            setIsLoading(false)
        })
    }, [queries]);

    if(isLoading){
        return(<h1>loading...</h1>)
    }

    console.log(queries)

    return(<><h1>Articles</h1>
  <div className="d-flex align-items-center" ><h5 className="ml-inline-5 pl-9">Choose Topic:</h5><div className="pl-2" role="group" aria-label="topic radio toggle button group">
  <input onClick = {(event)=>{setQueries((queries)=>{return {...queries, topic: ''}})}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked = {true}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

  <input onClick = {()=>{setQueries((queries)=>{return {...queries, topic: 'coding'}})}} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Coding</label>

  <input onClick = {()=>{setQueries((queries)=>{return {...queries, topic: 'football'}})}} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Football</label>

  <input onClick = {()=>{setQueries((queries)=>{return {...queries, topic: 'cooking'}})}} type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio4">Cooking</label></div>
  
  <div className="d-flex align-items-center mr-0 ml-inline-5 pl-9"><h5 >Sort By:</h5><div className="pl-2 " role="group" aria-label="sort by radio toggle button group">
  <input onClick = {()=>{setQueries((queries)=>{return {...queries, sort_by: 'created_at'}})}} type="radio" className="btn-check" name="btnradio2" id="btnradio5" autoComplete="off" defaultChecked = {true}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio5">Date Created</label>

  <input onClick = {()=>{setQueries((queries)=>{return {...queries, sort_by: 'title'}})}} type="radio" className="btn-check" name="btnradio2" id="btnradio6" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio6">Title</label>

  <input onClick = {()=>{setQueries((queries)=>{return {...queries, sort_by: 'author'}})}} type="radio" className="btn-check" name="btnradio2" id="btnradio7" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio7">Author</label>
  
  <input onClick = {()=>{setQueries((queries)=>{return {...queries, sort_by: 'votes'}})}} type="radio" className="btn-check" name="btnradio2" id="btnradio8" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio8">Top Rated</label>

  <input onClick = {()=>{setQueries((queries)=>{return {...queries, sort_by: 'votes'}})}} type="radio" className="btn-check" name="btnradio2" id="btnradio9" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio9">Top Rated</label></div>
</div></div>

<ul className="articles_list">{articles.map((article)=>{
        return <li className="articles_list_item" key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul></>)

}



export default Articles