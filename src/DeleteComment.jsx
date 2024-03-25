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



    return (<button isDisabled = {waiting} onPress={()=>{handleClick()}}> Delete </button>)
}

export default DeleteComment