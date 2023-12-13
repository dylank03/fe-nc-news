import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"


const Header = () =>{

    const{user} = useContext(UserContext)

    return(<><h1>NC News</h1>
    {user && <h2>User: {user}</h2>}   
    <nav>
        <Link to = "/"> Home </Link>
        <Link to="/Articles"> Articles</Link>
    </nav>
</>)
}

export default Header