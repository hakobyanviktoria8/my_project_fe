import React, { useEffect, useState } from "react";
import { User } from "./User";

export interface UserData {
  name: string;
  username: string;
  image: string;
}

export const GetAllUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [usersShow, setUsersShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((fetchRes) => setUsers(fetchRes.data))
      .catch((err) => {
        console.log("GetAllUsers comp_____", err.message);
      });
  }, []);

  return (
    <div>
      <h2>Users data</h2>
      <button onClick={() => setUsersShow(!usersShow)}>See all users</button>
      {usersShow &&
        users?.map((user) => (
          <div key={user.username}>
            <User user={user} />
          </div>
        ))}
    </div>
  );
};
