import { getComments, getUsers } from "./api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"

const Comments = ()=>{
    const [comments, setComments] = useState([])
    const {article_id} = useParams()




    useEffect(() => {
        getComments(article_id).then((commentData) => {
            setComments(commentData.comments);
        })
    }, []);



        if(comments.length === 0){
            return(<><h1>Comments</h1><h2>No Comments</h2></>)
        }
 
        return(<>
        <AddComment setComments={setComments}/><ul className="comments_list">{comments.map((comment)=>{
            return(<li className="d-flex align-center" key = {comment.comment_id}><img className="rounded-circle my-auto" style = {{height: "50px", width: "50px"}} src={comment.avatar_url} /><CommentCard comment = {comment}/></li>)
        })}</ul></>)
}


export default Comments