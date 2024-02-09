import { getComments } from "./api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"
import {Divider} from "@nextui-org/react"

const Comments = ({setCommentNumber})=>{
    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    const [updatedComments, setUpdatedComments] = useState([])




    useEffect(() => {
        getComments(article_id).then((commentData) => {
            setComments(commentData.comments);
        })
        }, []);


        if(comments.length === 0){
            return(<><h3>Comments</h3><h2>No Comments</h2></>)
        }
 
        return(<>
        <AddComment setCommentNumber={setCommentNumber} setUpdatedComments = {setUpdatedComments}/><h3>Comments</h3><Divider/><ul className="comments_list">{updatedComments.map((comment, index)=>{
            return(<li className = "comment" key = {index}><CommentCard comment = {comment}/></li>)
        })}</ul><ul className="comments_list">{comments.map((comment)=>{
            return(<><li className = "comment" key = {comment.comment_id}><CommentCard comment = {comment}/></li><Divider/></>)
        })}</ul></>)
}


export default Comments