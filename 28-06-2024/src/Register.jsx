import React, { useState } from "react";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {name , email , password} = userData;

    if(password.length < 8){
        alert("Pass must be greater than 8")
    }

    console.log(name , email , password);
  }

  // spread operator

  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <form className="w-50 gap-5 d-flex flex-column" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({...userData , name : e.target.value})}
          placeholder="Enter your name"
          className="form-control"
        />

        <input
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({...userData , email : e.target.value})}
          placeholder="Enter your email"
          className="form-control"
        />

        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({...userData , password : e.target.value})}
          placeholder="Enter your password"
          className="form-control"
        />

        <button className="btn btn-warning">Register Form</button>
      </form>
    </div>
  );
}

export default Register;
