import { useContext, useState } from "react"
import DeleteComment from "./DeleteComment"
import { UserContext } from "./contexts/UserContext"

const CommentCard = ({comment})=>{

    const [deleteMessage, setDeleteMessage] = useState(false)

    const {user} = useContext(UserContext)


    return(<>{deleteMessage ? <h2>{deleteMessage}</h2> : <div><p>{comment.author}</p><p>{comment.body}</p></div>}{user.username === comment.author ? <DeleteComment setDeleteMessage={setDeleteMessage} commentId = {comment.comment_id} /> : null}</>)

}

export default CommentCard