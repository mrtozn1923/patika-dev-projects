import axios from "axios";
import { useEffect, useState } from "react";
import UserItem from "../UserItem/UserItem";

function Users() {
  const [userList,setUserList]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {
      // handle success
      setUserList(response.data);
    })
    .catch((error)=> {
      // handle error
      console.log(error);
    })
    .finally(()=> {
      // always executed
      setLoading(false);
    });
  },[]);

  return (    
    <div id="user-list">
      {
        loading?"Loading...":
        userList.map((item,index)=>(
          <UserItem key={index} user={item} />
        ))
      }               
    </div>  
  )
}

export default Users