import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchUsers } from "../Redux/Slices/userSlice";

export const UserInformationDisplay = () => {
  const users = useSelector((state) => state.userInformation.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  //Fetch Userdata if no data is in store

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  const selectedUserData = users.filter((data) => id == data.id);

  if (id > users.length) {
    return <div>No user found for id : {id}</div>;
  } else if (!selectedUserData) {
    return <div>Loading User Information...</div>;
  }

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl bg-black text-white py-5 text-center">
          User Information
        </h1>
        <div className="flex justify-center my-10">
          <div className="relative overflow-x-auto shadow-md w-1/4 border border-gray-300 sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Key
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Id
                  </th>
                  <td className="px-6 py-4">{selectedUserData[0].id}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Name
                  </th>
                  <td className="px-6 py-4">{selectedUserData[0].name}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Username
                  </th>
                  <td className="px-6 py-4">{selectedUserData[0].username}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Email
                  </th>
                  <td className="px-6 py-4">{selectedUserData[0].email}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Phone
                  </th>
                  <td className="px-6 py-4">{selectedUserData[0].phone}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Website
                  </th>
                  <td className="px-6 py-4">{selectedUserData[0].website}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
