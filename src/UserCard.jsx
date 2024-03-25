const UserCard = ({user, handleClick}) =>{
  return(<div className="user_card"><button onClick = {()=>{handleClick(user.username)}} id = "user_button">{user.username}</button><img className = "user_list_img" src = {user.avatar_url}/> </div>)

}
export default UserCard