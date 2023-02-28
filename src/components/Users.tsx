import React from "react";
import { AddUser } from "./AddUser";
import { GetAllUsers } from "./GetAllUsers";

export const Users = () => {
  return (
    <div>
      <AddUser />
      <hr />

      <GetAllUsers />
    </div>
  );
};
