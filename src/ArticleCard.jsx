import { Link } from "react-router-dom"

const ArticleCard = ({article})=>{
    return(
        <nav><Link to = {"/articles/" + article.article_id}><div className="card d-flex align-items-stretch overflow-hidden " style = {{width: "18rem", height: "22rem", margin: "15px"}}><img className="card-image-top" src = {article.article_img_url}/><div className="card-body"><h5 className="card-title">{article.title}</h5> <p className="card-text">{article.author}</p></div></div></Link></nav>)
}

export default ArticleCard