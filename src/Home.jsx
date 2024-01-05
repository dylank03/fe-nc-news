import { useState, useEffect, useContext } from "react"
import { getUsers } from "./api"
import UserCard from "./UserCard"
import { UserContext } from "./contexts/UserContext"
import {CircularProgress} from "@nextui-org/react";

const Home = ()=>{
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)
    const [loginMessage, setLoginMessage] = useState('')
    const[isLoading, setIsLoading] = useState(true)

    getUsers().then((users)=>{
        setUserList(users.users)
        setIsLoading(false)
    })

    if(isLoading){
        return(<h1>loading...</h1>)
    }


    const handleClick = (userName)=>{
        setUser(userName)
        setLoginMessage(`You are now logged in as ${userName}`)
    }

   
    return(<><h1>Homepage</h1><h1>Users</h1><ul className="user_list">{userList.map((user, index)=>{
        return <li  key = {index}><UserCard user = {user} handleClick= {handleClick}/></li>
    })}</ul><h2>{loginMessage}</h2></>)

}

export default Home