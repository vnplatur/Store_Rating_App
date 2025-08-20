import React, { useEffect, useState } from "react";
import api from "../services/api";

function UserList() {
  const [users, setUsers] = useState([{name:"sunil1",email:"sunil@gmail.com"}]);

  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>👥 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
