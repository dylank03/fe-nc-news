import {Link} from 'react-router-dom'

const ArticleCard = ({article})=>{
    return(
        <><nav><Link to = {"/articles/" + article.article_id}><h2 className="article_list_item">{article.title}</h2></Link></nav><img className="article_img" src = {article.article_img_url}/> <p>{article.author}</p></>)
}


export default ArticleCard