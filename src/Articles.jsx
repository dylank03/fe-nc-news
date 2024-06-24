import { useState, useEffect } from "react"
import getArticles from "./api"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import { Card, Placeholder } from "react-bootstrap"
import PageNavigation from "./PageNavigation"

import Filters from "./Filters"


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


    return(<div className="responsive-background"><h1 className="">Articles</h1>
    <Filters updateTopic = {updateTopic} updateOrder = {updateOrder} updateSort = {updateSort} sortBy = {sortBy} orderBy= {orderBy} topic = {topic}/>

{isLoading ? <div className="articles_list">{Array(10).fill(0).map((placeHolder, index)=>{return <Card key={index} className="card d-flex align-items-stretch overflow-hidden m-3" style={{ width: '18rem' }}>
        <div className="d-flex justify-content-center align-items-center" style={{width: "18rem", height: "12rem"}}><Card.Img style = {{height: "100px", width: "100px"}}variant="top" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952juyoosoicqmprwxol39i9kqnl3fwfdj8wepygecc&ep=v1_gifs_search&rid=200w.gif&ct=g"/></div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>})}
    </div> : <div><ul className="articles_list">{articles.map((article)=>{
        return <li className="articles_list_item" key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul>
    <PageNavigation updatePage = {updatePage} page = {page} pageButton = {pageButton} articleCount = {articleCount}/>
  </div>}</div>)

}



export default Articles