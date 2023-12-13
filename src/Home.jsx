import { useState, useEffect, useContext } from "react"
import { getUsers } from "./api"
import UserCard from "./UserCard"
import { UserContext } from "./contexts/UserContext"

const Home = ()=>{
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)
    const [loginMessage, setLoginMessage] = useState('')

    useEffect(()=>{
        getUsers().then((users)=>{
            setUserList(users.users)
        })
    },[])

    const handleClick = (userName)=>{
        setUser(userName)
        setLoginMessage(`You are now logged in as ${userName}`)
    }


    return(<><h1>Homepage</h1><h1>Users</h1><ul className="user_list">{userList.map((user, index)=>{
        return <li className = "user_card"  key = {index}><UserCard user = {user} handleClick= {handleClick}/></li>
    })}</ul><h2>{loginMessage}</h2></>) 

}

export default Home