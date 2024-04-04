import { postComment } from "./api"
import { useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"

const AddComment = ({setUpdatedComments, setCommentNumber}) =>{

    const[newComment, setNewComment] = useState('')
    const[inputBody, setInputBody] = useState('')
    const {article_id} = useParams()
    const {user} = useContext(UserContext)
    const [message, setMessage] = useState(null)

    const handleSubmit = (event)=>{
        event.preventDefault()
        setNewComment(inputBody)
        setInputBody('')
        if(newComment.length === 0){
            setMessage('Comment Cannot be empty')
        }
    }


    useEffect(()=>{
        if(newComment.length >0){
          setMessage('Posting...')
          postComment(article_id, newComment, user.username).then(()=>{setMessage('Comment Posted!')}).catch((err)=>{
              if(!user){
                  setMessage('Please log in to add a comment')
              }
              else{
                  setMessage('Something went wrong, please try again later')
              }
          })
        }
        setNewComment('')
    }, [newComment])


    return (
        <>
          <form onSubmit = {handleSubmit}>
            <div className="form-group">
            <label>
              Post Comment:
              <textarea className="form-control" 
                placeholder="Add Comment"
                onChange={(event) => {
                  setInputBody(event.target.value);
                }}
                value={inputBody}
              ></textarea>
            </label></div><button className="btn btn-primary">add comment</button></form></>)

}

export default AddComment