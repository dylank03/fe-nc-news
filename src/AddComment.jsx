import { postComment } from "./api"
import { useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { getComments } from "./api"

const AddComment = ({setComments}) =>{

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
          postComment(article_id, newComment, user.username).then(()=>{setMessage('Comment Posted!')}).then(()=>{getComments(article_id).then((commentData) => {
            setComments(commentData.comments);
        })}).catch((err)=>{
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
        <div className="d-flex justify-content-center">
          <form onSubmit = {handleSubmit}>
            <div className="form-group">
            <label className="text-center">
              Post Comment:
              <textarea className="form-control" 
                placeholder="Add Comment"
                onChange={(event) => {
                  setInputBody(event.target.value);
                }}
                value={inputBody}
              ></textarea>
            </label></div><div className="d-flex justify-content-center"><button className="btn btn-primary">add comment</button><h5>{message}</h5></div></form></div>)

}

export default AddComment