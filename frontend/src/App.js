import React from "react";
import "./styles/app.scss";
import {
   createBrowserRouter as Router,
   RouterProvider,
   Outlet,
} from "react-router-dom";
// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Error from "./pages/Error";
// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
            element: <Single />,
         },
         {
            path: "/write",
            element: <Write />,
         },
      ],
   },
   {
      path: "/register",
      element: <Register />,
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
