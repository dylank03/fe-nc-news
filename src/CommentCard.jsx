import { useContext, useState } from "react"
import DeleteComment from "./DeleteComment"
import { UserContext } from "./contexts/UserContext"

const CommentCard = ({comment})=>{

    const [deleteMessage, setDeleteMessage] = useState(false)

    const {user} = useContext(UserContext)

    return(<>{deleteMessage ? <h2>{deleteMessage}</h2> : <><div className="d-flex align-items-center comment bg-light rounded"><div><p style = {{textAlign:"justify"}} className="lead mb-0 me-4">{comment.body}</p><p className="text-secondary p mb-0">{comment.author}</p></div><div>{user.username === comment.author ? <DeleteComment setDeleteMessage={setDeleteMessage} commentId = {comment.comment_id} /> : null}</div></div></>}</>)

}

export default CommentCard