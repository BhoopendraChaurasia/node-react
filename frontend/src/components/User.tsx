import {  useEffect, useState } from "react";
import Button from "./Button";



function User() {


  const [user , setUser] = useState<{name : string, email : string, age : number}>({
    name: "",
    email: "",
    age: 0
  });

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(({ user }) => setUser(user))
  }, []);

  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.age}</h1>
      <Button />
    </>)
}

export default User;


