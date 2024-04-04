import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"

const Header = () =>{

    const{user} = useContext(UserContext)

    return(<>
    <div className="d-flex align-items-center flex-row flex-nowrap justify-content-between bg-blue">
        <div className="w-50">
            <img className = "page_logo" src="/logo.svg" alt="Site Logo"></img>
        </div> 
        <nav >
            <div className="d-flex align-items-center w-50">
                <Link className = "header_link" to = "/"> Home </Link>
                <Link className="header_link" to="/articles"> Articles</Link>
            </div>
        </nav>
        <div className= "d-flex align-items-center w-50 justify-content-end">
            {user ? <div className="card bg-light-blue mr-20"><h1><i className="bi bi-person-fill"></i><img className="rounded-circle ml-4" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /></h1><h5>{user.username}</h5></div> : <Link to ="/login" className="text-white mr-20"><h1>Log In</h1></Link>}
        </div>
    </div>
</>)
}

export default Header