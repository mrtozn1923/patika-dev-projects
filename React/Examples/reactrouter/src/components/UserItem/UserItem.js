import { Link } from "react-router-dom"

function UserItem({user}) {
  return (
    <Link to={`/users/${user.id}`} className="user-item">{user.name}</Link>
  )
}

export default UserItem