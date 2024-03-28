import { useState, useEffect } from "react"
import getArticles from "./api"
import {getTopics} from "./api"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"


const Articles = ()=>{

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[searchParams, setSearchParams] = useSearchParams({})
    const[articleCount, setArticleCount] = useState(0)
    const[topic, setTopic] = useState('')
    const[sortBy, setSortBy] = useState('created_at')

    const updateTopic = (filteredTopic) =>{
        setTopic(filteredTopic)
        setSearchParams({topic: filteredTopic, sortBy})
    }

    const updateSort = (filteredSort)=>{
        setSortBy(filteredSort)
        setSearchParams({topic, sortBy: filteredSort})
    }

    useEffect(() => {
        getArticles(searchParams).then((articleData) => {
            setArticles(articleData.articles);
            setArticleCount(articleData.article_count)
            setIsLoading(false)
        })
    }, [searchParams, topic, sortBy]);

    if(isLoading){
        return(<h1>loading...</h1>)
    }

    console.log(searchParams)

    return(<><h1>Articles</h1>
  <div className="d-flex align-items-center" ><h5 className="ml-inline-5 pl-9">Choose Topic:</h5><div className="pl-2" role="group" aria-label="topic radio toggle button group">
  <input onClick = {()=>{updateTopic('')}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked = {true}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

  <input onClick = {()=>{updateTopic('coding')}} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Coding</label>

  <input onClick = {()=>{updateTopic('football')}} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Football</label>

  <input onClick = {()=>{updateTopic('cooking')}} type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio4">Cooking</label></div>
  
  <div className="d-flex align-items-center mr-0 ml-inline-5 pl-9"><h5 >Sort By:</h5><div className="pl-2 " role="group" aria-label="sort by radio toggle button group">
  <input onClick = {()=>{updateSort('created_at')}} type="radio" className="btn-check" name="btnradio2" id="btnradio5" autoComplete="off" defaultChecked = {true}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio5">Date Created</label>

  <input onClick = {()=>{updateSort('title')}} type="radio" className="btn-check" name="btnradio2" id="btnradio6" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio6">Title</label>

  <input onClick = {()=>{updateSort('author')}} type="radio" className="btn-check" name="btnradio2" id="btnradio7" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio7">Author</label>
  
  <input onClick = {()=>{updateSort('votes')}} type="radio" className="btn-check" name="btnradio2" id="btnradio8" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio8">Top Rated</label>

  <input onClick = {()=>{setSearchParams((queries)=>{return {...queries, sortBy: 'votes'}})}} type="radio" className="btn-check" name="btnradio2" id="btnradio9" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btnradio9">Top Rated</label></div>
</div></div>

<ul className="articles_list">{articles.map((article)=>{
        return <li className="articles_list_item" key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul></>)

}



export default Articles