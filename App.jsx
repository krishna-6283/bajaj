import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newpass from "./components/newpass";
import VerifyForm from "./components/verifyForm";
import VerifyEmail from "./components/VerifyEmail.jsx";
import "./App.css";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/verify",
    element: <VerifyForm />,
  },
  {
    path: "/newpass",
    element: <Newpass />,
  },
  {
    path: "/verifyemail",
    element: <VerifyEmail />,
  }
]);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};

export default App;
