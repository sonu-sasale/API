import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserData from "../UserData";


const api=("https://jsonplaceholder.typicode.com/users")



 const Api=()=>{

const[user, setuser]= useState([]);

   


  const fetchuser = async(url)=>{
try{
    const res= await fetch(url);
    const data = await res.json();
    if (data.length > 0){
        setuser(data);
    }
  

} catch(e){
console.error(e);
}
}

useEffect( ()=>{
fetchuser(api);
},[])



return(
    <>

<table className="table table-dark text-white  ">
    
   <thead>
<tr>
   <th>id</th>
   <th>name</th>
   <th>email</th>
   
   </tr>

</thead>
<tbody>
        <UserData user={user}/>
    </tbody>
</table>
    </>
)



 }
 
export default Api;