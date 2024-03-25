const UserCard = ({user, handleClick}) =>{
  return(<><button onClick = {()=>{handleClick(user.username)}} id = "user_button">{user.username}</button><img className = "user_list_img" src = {user.avatar_url}/> </>)

}
export default UserCard