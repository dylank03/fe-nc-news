import { useState, useEffect } from "react"
import getArticles from "./api"
import {getTopics} from "./api"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"



const Articles = ()=>{

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const [topics, setTopics] = useState([])
    const[topic, setTopic] = useSearchParams('')
    const[articleCount, setArticleCount] = useState(0)

    const handleSubmit = (event)=>{
        event.preventDefault()
        setTopic('')
    }

    useEffect(() => {
        getArticles(topic).then((articleData) => {
            setArticles(articleData.articles);
            setArticleCount(articleData.article_count)
            setIsLoading(false)
        })
        getTopics().then((topicsData)=>{
            setTopics(topicsData.allTopics)
        })
    }, [topic]);

    if(isLoading){
        return(<h1>loading...</h1>)
    }

    return(<>          
    {/* <form onSubmit={handleSubmit}>
        <label>
          Category:
          <select
            name="category-names"
            id="item_category"
            onChange={(event) => {
              setTopic({topic: event.target.value});
            }}
                  >
            <option value="" disabled  >Categories</option>
            {topics.map((topic)=>{
                return(<option value={topic.slug}> {topic.slug}</option>)
            })}

          </select>
        </label>
        <button>Reset Filters</button> */}
      {/*</form><h2>There are {articleCount} articles</h2>*/}<h1>Top Articles</h1><ul className="articles_list">{articles.map((article)=>{
        return <li className="articles_list_item" key = {article.article_id}><ArticleCard article = {article}/></li>
    })}</ul></>)

}



export default Articles