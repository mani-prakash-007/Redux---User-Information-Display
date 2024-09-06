import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../Redux/Slices/userSlice";
import { FaUserPlus } from "react-icons/fa6";

export const AllUsers = () => {
  //State
  const [allUsersList, setAllUsersList] = useState();
  const [usersList, setUsersList] = useState();

  //Redux Store Access
  const { users, loading, error } = useSelector(
    (state) => state.userInformation
  );
  //Dispath
  const dispatch = useDispatch();

  //Side Effects
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
    setUsersList(users);
    setAllUsersList(users);
  }, [dispatch, users]);

  //Search functionality
  const search = (e) => {
    console.log(e.target.value);
    const data = allUsersList.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log("Before If Condition : ", data);
    if (e.target.value.length === 0) {
      setUsersList(allUsersList);
    } else if (data.length > 0) {
      console.log(data);
      setUsersList(data);
    } else if (data.length === 0) {
      setUsersList("No Users Found");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl bg-black text-white py-5 text-center">
          All User Information
        </h1>
        <div className="flex flex-col justify-center items-center my-10">
          <div className="flex justify-end flex-wrap relative overflow-x-auto sm:rounded-lg w-1/3 my-5">
            <NavLink
              to={"/users/adduser"}
              className="border border-gray-300 px-5 py-2 mr-5  rounded-lg text-red-600 hover:text-white hover:bg-red-600 active:scale-90"
            >
              <FaUserPlus />
            </NavLink>
            <input
              onChange={search}
              type="text"
              className="border rounded-lg px-5 w-40 focus:outline-none"
              placeholder="Search for user"
            />
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/3 border border-gray-300">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Button</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersList === "No Users Found" ? (
                  <>
                    <tr className="my-5">
                      <th scope="col" className="px-6 py-3">
                        No users Found
                      </th>
                    </tr>
                  </>
                ) : (
                  usersList?.map((userData, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {userData.id}
                        </th>
                        <td className="px-6 py-4">{userData.name}</td>
                        <td className="px-6 py-4">{userData.email}</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/users/${userData.id}`}
                            className="font-medium p-2 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

// export const userDataFetch = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     return response.data;
//   } catch (error) {
//     alert(`Can't Fetch Data
//       Error : ${error}`);
//   }
// };
