import React, { useState } from "react";

export const User = ({ user }: any) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h4 onClick={(e) => setShow(!show)}>{user.username}</h4>
      {show && (
        <div>
          <h3>You get {user.username} user data</h3>
          <h4>User name: {user.name}</h4>
          <img src={user.image} alt="img" />
          <button>Edit</button>
        </div>
      )}
    </div>
  );
};
