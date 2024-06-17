import { deleteComment } from "./api"
import { useState, useEffect,  } from "react"

const DeleteComment = ({commentId, setDeleteMessage}) =>{

    const [waiting, setWaiting] = useState(false)

    const handleClick = ()=>{
        setWaiting(true)
        deleteComment(commentId).then(()=>{
            setDeleteMessage('Comment Deleted')
        }).catch((err)=>{
                setDeleteMessage('something went wrong, please try again later')
                setTimeout(()=>{
                    setDeleteMessage(false) 
                    setWaiting(false)},3000)
        })
    }



    return (<button className="btn btn-danger" isDisabled = {waiting} onClick={()=>{handleClick()}}><i className="h3 bi bi-trash3"></i></button>)
}

export default DeleteComment