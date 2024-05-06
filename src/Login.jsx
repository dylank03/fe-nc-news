import { useState, useEffect, useContext } from "react"
import { getUsers } from "./api"
import UserCard from "./UserCard"
import { UserContext } from "./contexts/UserContext"
import { DropdownItem, Card, Placeholder } from "react-bootstrap"

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
        return(<><h1>Users</h1><div className="articles_list">{Array(5).fill(0).map((placeHolder, index)=>{return <Card key={index} className="card d-flex align-items-stretch overflow-hidden m-3" style={{ width: '18rem' }}>
        <div className="d-flex justify-content-center align-items-center" style={{width: "18rem", height: "12rem"}}><Card.Img style = {{height: "100px", width: "100px"}}variant="top" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952juyoosoicqmprwxol39i9kqnl3fwfdj8wepygecc&ep=v1_gifs_search&rid=200w.gif&ct=g"/></div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>})}
    </div></>)
    }


    const handleClick = (selectedUser)=>{
        setUser(selectedUser)
        setLoginMessage(`You are now logged in as ${selectedUser.username}`)
    }

   
    return(<><h1>Users</h1><ul className="user_list">{userList.map((user, index)=>{
        return <li  key = {index}><UserCard user = {user} handleClick= {handleClick}/></li>
    })}</ul><h2>{loginMessage}</h2></>)

}

export default Login