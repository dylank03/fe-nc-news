import { postComment } from "./api"
import { useState} from "react"
import { useParams } from "react-router-dom"

const AddComment = () =>{

    const[newComment, setNewComment] = useState({})
    const[inputBody, setInputBody] = useState({})
    const {article_id} = useParams()

    const handleSubmit = (event)=>{
        event.preventDefault()

    }

    return (
        <>
          <form onSubmit={handleSubmit}>
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