import { useContext, useState } from "react"
import DeleteComment from "./DeleteComment"
import { UserContext } from "./contexts/UserContext"
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const CommentCard = ({comment})=>{

    const [deleteMessage, setDeleteMessage] = useState(false)

    const {user} = useContext(UserContext)


    return(<Card>{deleteMessage ? <h2>{deleteMessage}</h2> : <><p>{comment.author}</p><p>{comment.body}</p></>}{user === comment.author ? <DeleteComment setDeleteMessage={setDeleteMessage} commentId = {comment.comment_id} /> : null}</Card>)

}

export default CommentCard