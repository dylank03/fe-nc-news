import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const UserCard = ({user, handleClick}) =>{
    return(<Card><Image height={200} width={200} src = {user.avatar_url}/><CardFooter><p>{user.username}</p><Button onPress={()=>{handleClick(user.username)}} className = "my-100" variant="flat" color="primary" radius="lg" size="sm">
    Select User
  </Button></CardFooter></Card>)

}
export default UserCard