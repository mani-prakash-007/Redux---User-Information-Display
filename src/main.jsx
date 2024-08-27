import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AllUsers } from "./components/allUsers";
import { UserInformationDisplay } from "./components/userInformationDisplay";
import { ErrorPage } from "./ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AllUsers />} />
      <Route path="/users" element={<AllUsers />} />
      <Route path="/users/:id" element={<UserInformationDisplay />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
