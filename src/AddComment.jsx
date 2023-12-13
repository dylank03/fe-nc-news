import { postComment } from "./api"
import { useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"

const AddComment = ({setUpdatedComments}) =>{

    const[newComment, setNewComment] = useState('')
    const[inputBody, setInputBody] = useState('')
    const {article_id} = useParams()
    const {user} = useContext(UserContext)

    const handleSubmit = (event)=>{
        event.preventDefault()
        setNewComment(inputBody)
        setInputBody('')
    }

    useEffect(()=>{
        if(newComment.length >0){
        postComment(article_id, newComment, user)
        setUpdatedComments((currComments)=>{
          return [...currComments, {author: user, body: newComment}]})
        }

        setNewComment('')
    }, [newComment])

    return (
        <>
          <form onSubmit = {handleSubmit}>
            <label>
              Comment:
              <input
                type="text"
                placeholder="Add Comment"
                id="comment_body"
                onChange={(event) => {
                  setInputBody(event.target.value);
                }}
                value={inputBody}
              ></input>
            </label><button>add comment</button></form></>)

}

export default AddComment