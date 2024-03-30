import { useContext, useState } from "react"
import DeleteComment from "./DeleteComment"
import { UserContext } from "./contexts/UserContext"

const CommentCard = ({comment})=>{

    const [deleteMessage, setDeleteMessage] = useState(false)

    const {user} = useContext(UserContext)


    return(<>{deleteMessage ? <h2>{deleteMessage}</h2> : <><p>{comment.author}</p><p>{comment.body}</p></>}{user.username === comment.author ? <DeleteComment setDeleteMessage={setDeleteMessage} commentId = {comment.comment_id} /> : null}</>)

}

export default CommentCard