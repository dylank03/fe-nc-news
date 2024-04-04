import { useState, useEffect, useContext } from "react"
import { getUsers } from "./api"
import UserCard from "./UserCard"
import { UserContext } from "./contexts/UserContext"

const Login = ()=>{
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)
    const [loginMessage, setLoginMessage] = useState('')
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getUsers().then((users)=>{
            setUserList(users.users)
            setIsLoading(false)
        })
    },[])


    if(isLoading){
        return(<h1>loading...</h1>)
    }


    const handleClick = (selectedUser)=>{
        setUser(selectedUser)
        setLoginMessage(`You are now logged in as ${selectedUser.username}`)
    }

   
    return(<><h1>Homepage</h1><h1>Users</h1><ul className="user_list">{userList.map((user, index)=>{
        return <li  key = {index}><UserCard user = {user} handleClick= {handleClick}/></li>
    })}</ul><h2>{loginMessage}</h2></>)

}

export default Login