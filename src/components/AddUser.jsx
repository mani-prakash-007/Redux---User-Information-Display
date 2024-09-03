import React, { useState } from "react";
import { InputField } from "./Input Component/Input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Reducer, { addUser } from "../Redux/Slices/userSlice";

export const AddUser = () => {
  //Redux Store
  const users = useSelector((state) => state.userInformation.users);
  const dispatch = useDispatch();
  //States
  const [newUser, setNewUser] = useState({
    id: users.length + 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewUser((currentInput) => {
      return {
        ...currentInput,
        [name]: value,
      };
    });
  };

  const addNewUser = (e) => {
    e.preventDefault();
    if (newUser.name.length == 0) {
      alert("Enter Name...");
    } else if (newUser.username.length == 0) {
      alert("Enter userName...");
    } else if (newUser.email.length == 0) {
      alert("Enter Email...");
    } else if (newUser.phone.length == 0) {
      alert("Enter Phone Number...");
    } else if (newUser.website.length == 0) {
      alert("Enter website...");
    } else {
      dispatch(addUser(newUser));
      setNewUser({
        id: users.length + 1,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
      alert("User Added Successfully....");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center my-5">
        <div className=" w-full max-w-md">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="my-5 font-bold text-xl text-center text-gray-700">
              {" "}
              Add User{" "}
            </h1>
            {/* Input Fields */}
            <InputField
              id="name"
              name="name"
              label="Name"
              type="text"
              value = {newUser.name}
              onChange={handleChange}
            />
            <InputField
              id="username"
              name="username"
              label="Username"
              type="text"
              value = {newUser.username}
              onChange={handleChange}
            />
            <InputField
              id="email"
              name="email"
              label="Email"
              type="text"
              value = {newUser.email}
              onChange={handleChange}
            />
            <InputField
              id="phone"
              name="phone"
              label="Phone No"
              type="text"
              value = {newUser.phone}
              onChange={handleChange}
            />
            <InputField
              id="website"
              name="website"
              label="Website"
              type="text"
              value = {newUser.website}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:scale-90 focus:shadow-outline"
                type="submit"
                onClick={addNewUser}
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <Link
            to={`/users`}
            className="font-medium p-2 border border-gray-300 h-11 rounded-xl text-gray-500 hover:bg-gray-500 hover:text-white transition-colors duration-300"
          >
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};
