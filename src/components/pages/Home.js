import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home=()=>{
    const[users,setUser]=useState([]);
    useEffect(()=>{

        loadUsers();
    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:3002/users");
        setUser(result.data)
        console.log(result)
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
      };
    
    
    return(
        <div classNmae="container">
            <div classNmae="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UseName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map((users,index)=>(
              <tr>
                  <th scope="row">{index+1}</th>
                  <td>{users.name}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${users.id}`}>View</Link>
                      <Link className="btn btn-primary mr-2" to={`/users/edit/${users.id}`}>Edit</Link>
                      <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(users.id)}
                  >
                    Delete
                  </Link>
                  </td>
              </tr>
          ))
      }
   </tbody>
</table>
            </div>

        </div>
    )
}
export default Home