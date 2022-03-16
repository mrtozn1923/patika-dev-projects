import axios from "axios";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail() {
    const params=useParams();
    const [userDetail,setUserDetail]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((response)=> {
          // handle success
          setUserDetail(response.data);
        })
        .catch((error)=> {
          // handle error
          console.log(error);
        })
        .finally(()=> {
          // always executed
          setLoading(false);
        });
      },[params]);

  return (
    
    loading?"Loading...":        
    <div className="user-detail-card">
        <p id="user-name">{userDetail.name}</p>
        <p id="user-email">{userDetail.email}</p>
        <p id="user-website">{userDetail.website}</p>
    </div>
  )
}

export default UserDetail