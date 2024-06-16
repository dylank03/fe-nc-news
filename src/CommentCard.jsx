import { useContext, useState } from "react"
import DeleteComment from "./DeleteComment"
import { UserContext } from "./contexts/UserContext"

const CommentCard = ({comment})=>{

    const [deleteMessage, setDeleteMessage] = useState(false)

    const {user} = useContext(UserContext)

    return(<>{deleteMessage ? <h2>{deleteMessage}</h2> : <><div className = "comment-pointer"></div><div className="comment bg-light rounded"><p className="lead mb-0">{comment.body}</p><p className="text-secondary p mb-0">{comment.author}</p></div></>}{user.username === comment.author ? <DeleteComment setDeleteMessage={setDeleteMessage} commentId = {comment.comment_id} /> : null}</>)

}

export default CommentCard