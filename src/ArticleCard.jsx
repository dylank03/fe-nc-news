import { Link } from "react-router-dom"
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const ArticleCard = ({article})=>{
    //return(
        //<><nav><Link to = {"/articles/" + article.article_id}><h2 className="article_list_item">{article.title}</h2></Link></nav><img className="article_img" src = {article.article_img_url}/> <p>{article.author}</p></>)

        return (
            <nav>
                <Link to = {"/articles/" + article.article_id}>
            <Card className="flex-col items-center article_list_item">
              <CardHeader className="pb-0 pt-2 px-4 flex-col">
                <h4 className="font-bold text-large">{article.title}</h4>
                <small className="text-default-500">{article.author}</small>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex-col items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-x1"
                  src={article.article_img_url}
                  width={270}
                />
              </CardBody>
            </Card>
            </Link>
            </nav>
          );
    }


export default ArticleCard