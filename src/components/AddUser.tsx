import React, { useState } from "react";

export const AddUser = () => {
  const [userData, setUserData] = useState<{
    username: string;
    name: string;
    image?: string;
  }>({
    username: "",
    name: "",
    image: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlePostUserData = async () => {
    // const res = await fetch("http://localhost:3000/users", {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
    // const userData1 = await res.text();
    // console.log("Done2222!", userData1);

    console.log(111111, JSON.stringify(userData));
    fetch("http://localhost:3000/users", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(2222, response);

        return response.text();
      })
      .then((data) => console.log(33333333, data))
      .catch((err) => {
        console.log("AddUser comp_____", 44444, err.message);
      });
  };

  return (
    <div>
      <h2>Add user</h2>
      <div>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          value={userData.image}
          onChange={handleChange}
        />
        <button onClick={handlePostUserData}>Add user</button>
      </div>
    </div>
  );
};
