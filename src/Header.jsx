import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"

const Header = () =>{

    const{user} = useContext(UserContext)

    return(<><h1>NC News</h1>
    {user && <h2>User: {user}</h2>}   
    <nav className = "navbar">
        <Link className = "navitem" to = "/"> Home </Link>
        <Link className = "navitem" to="/Articles"> Articles</Link>
    </nav>
</>)
}

export default Header