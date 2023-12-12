const ArticleCard = ({article})=>{
    return(
        <><h2 className="article_list_item">{article.title}</h2><img className="article_img" src = {article.article_img_url}/> <p>{article.author}</p></>)
}


export default ArticleCard