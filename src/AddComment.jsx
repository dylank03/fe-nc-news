import { postComment } from "./api"
import { useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { Textarea } from "@nextui-org/react"

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
              <Textarea
              errorMessage = {<h2 className="error_message">{message}</h2>}
              variant = {"underlined"}
                placeholder="Add Comment"
                size="lg"
                onChange={(event) => {
                  setInputBody(event.target.value);
                }}
                value={inputBody}
              ></Textarea>
            </label><button>add comment</button></form></>)

}

export default AddComment