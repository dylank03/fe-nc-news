import { useState, useEffect } from "react"
import getArticles from "./api"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"


const Articles = ()=>{

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[articleCount, setArticleCount] = useState(0)
    const[topic, setTopic] = useState('')
    const[sortBy, setSortBy] = useState('created_at')
    const[orderBy, setOrderBy] = useState('DESC')
    const[page, setPage] = useState(1)
    const[searchParams, setSearchParams] = useSearchParams({topic, sortBy, orderBy, page})
    const[pageButton, setPageButton] = useState(Array(Math.ceil((articleCount/10))).fill(0))

    const updateTopic = (filteredTopic)=>{
        setTopic(filteredTopic)
        setPage(1)
        setSearchParams({topic: filteredTopic, sortBy, orderBy, page: 1})
    }

    const updateSort = (filteredSort)=>{
        setSortBy(filteredSort)
        setSearchParams({topic, sortBy: filteredSort, orderBy, page})
    }

    const updateOrder = (filteredOrder)=>{
        setOrderBy(filteredOrder)
        setSearchParams({topic, sortBy, orderBy: filteredOrder, page})
    }

    const updatePage = (pageNumber)=>{
        setPage(pageNumber)
        setSearchParams({topic, sortBy, orderBy, page: pageNumber})
    }

    useEffect(() => {
        getArticles(searchParams).then((articleData) => {
            setArticles(articleData.articles);
            setArticleCount(articleData.article_count)
            setIsLoading(false)
            setPageButton(Array((Math.ceil(articleData.article_count/10))).fill(0))
        })

    }, [searchParams, topic, sortBy, orderBy, page]);


    if(isLoading){
        return(<h1>loading...</h1>)
    }


    return(<><h1 className="mt-3">Articles</h1>
  <div className="d-flex align-items-center bs-breakpoint-lg" ><h5 className="ml-inline-5 pl-9">Choose Topic:</h5><div className="pl-2" role="group" aria-label="topic radio toggle button group">
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

  <input onClick = {()=>{updateOrder(orderBy === 'ASC' ? 'DESC' : 'ASC')}} type="radio" className="btn-check" name="btnradio3" id="btnradio9" autoComplete="off" defaultChecked={true}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio9">{orderBy === 'ASC' ? <i className="bi bi-sort-alpha-up"></i> : <i className="bi bi-sort-alpha-down"></i>}</label></div>
</div></div>

<ul className="articles_list">{articles.map((article)=>{
        return <li className="articles_list_item" key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul><div aria-label="Page navigation" className="d-flex justify-content-center">
    <ul className="pagination">
      {page > 1 && <li className="page-item"><button className="page-link" onClick = {()=>(updatePage(+page -1))}>Previous</button></li>}
        {pageButton.map((button, index)=> {return <li key ={index} className="page-item"><button className="page-link" onClick = {()=>(updatePage(index +1))}>{index +1}</button></li>})}
      {page <= articleCount/10 && <li className="page-item"><button className="page-link" onClick = {()=>(updatePage(+page +1))}>Next</button></li>}
    </ul>
  </div></>)

}



export default Articles