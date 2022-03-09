import axios from "axios";
async function getData(userId){    
    const getUser=(userId)=>{
        return new Promise(async (resolve,reject)=>{
            const {data}=await axios("https://jsonplaceholder.typicode.com/users/"+userId);
            resolve(data);  
        });            
    };
    const getPosts=(userId)=>{
        return new Promise(async (resolve,reject)=>{
            const {data}=await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);
            resolve(data);  
        });            
    };        
    try{
        let user=await getUser(userId);
        let posts=await getPosts(userId); 
        user.posts=posts;
        return user;
    }catch(err){
        return {};
    }  
}

export default getData;