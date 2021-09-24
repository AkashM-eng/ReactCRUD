import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => {

    const [users,setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result=await axios.get("http://localhost:3001/users");
        setUser(result.data);
     }

     const deleteUser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
     }

    return (
    <div className="container">
         <div className="py-4">
             <h1>Home</h1>
             <table class="table">
  <thead class="thead-dark border shadow">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/user/${user.id}`}>
                    View
                  </Link>

                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
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
};

export default Home;