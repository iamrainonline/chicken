import React from "react";
import {
  createBrowserRouter as Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Auth/Login";
// Header
import Navbar from "./components/Header/Navbar";
// Utils
import Error from "./components/Utils/Error";
// Components
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = Router([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <div>some thing</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
