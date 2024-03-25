import { Link } from "react-router-dom"

const ArticleCard = ({article})=>{
    return(
        <nav><Link to = {"/articles/" + article.article_id}><div className="article_card"><h2 className="article_title">{article.title}</h2><img className="article_img" src = {article.article_img_url}/> <p>{article.author}</p></div></Link></nav>)
}

export default ArticleCard