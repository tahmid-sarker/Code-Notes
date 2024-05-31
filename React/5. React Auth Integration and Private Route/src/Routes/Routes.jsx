import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);