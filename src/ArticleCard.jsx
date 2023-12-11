const ArticleCard = ({articles})=>{
    return(
        <ul className="articlesList">
            {articles.map((article)=>{
                return(<><li className="article_list_item">{article.title}</li><img className="article_img" src = {article.article_img_url}/> <p>{article.author}</p></>)})
            }
        </ul>
    )
}

export default ArticleCard