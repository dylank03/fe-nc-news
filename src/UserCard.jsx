const UserCard = ({user, handleClick}) =>{
  return(<div className="card d-flex align-items-stretch" style={{width: "18rem"}}><img className = "card-image-top" style={{height: "200px"}} src = {user.avatar_url}/><div className="card-body"><h5 className="card-text">{user.username}</h5><button className ="btn btn-primary w-100" onClick = {()=>{handleClick(user.username)}} id = "user_button">Select User</button></div></div>)

}
export default UserCard