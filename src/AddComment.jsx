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
          setUpdatedComments((currComments)=>{
          return [{author: user, body: newComment}, ...currComments]
        })
          setCommentNumber((currNumber) => currNumber + 1)
          postComment(article_id, newComment, user).then(()=>{setMessage('Comment Posted!')}).catch((err)=>{
              setUpdatedComments((currComments)=>{
                  return currComments.slice(1)
              })
              if(!user){
                  setMessage('Please log in to add a comment')
              }
              else{
                  setMessage('Something went wrong, please try again later')
              }
              setCommentNumber((currNumber) => currNumber -1)
          })
        }
        setNewComment('')
    }, [newComment])


    return (
        <>
          <form onSubmit = {handleSubmit}>
            <label>
              Post Comment:
              <textarea
                placeholder="Add Comment"
                onChange={(event) => {
                  setInputBody(event.target.value);
                }}
                value={inputBody}
              ></textarea>
            </label><button className="btn btn-primary">add comment</button></form></>)

}

export default AddComment