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
        <div className="py-5">
          <form className="w-100" onSubmit = {handleSubmit}>
          <label className="h2 text-center w-100">
              Post Comment:
            </label>
            <div className="form-group d-flex align-items-center">
              <textarea className="form-control mt-3" 
                placeholder="Type comment here!"
                onChange={(event) => {
                  setInputBody(event.target.value);
                }}
                value={inputBody}
              ></textarea>
            <button className="btn btn-primary mt-3 ms-3"><i className="h5 bi bi-send"> Send</i></button></div><h5>{message}</h5></form></div>)

}

export default AddComment