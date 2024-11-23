import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
   const { currentUser, logout } = useContext(AuthContext);

   return (
      <div className="navbar">
         <div className="logo">♣</div>
         <div className="link">
            <Link className="links" to="/?cat=art">
               Art
            </Link>
            <Link className="links" to="/">
               Science
            </Link>
            <Link className="links" to="/">
               Technology
            </Link>
            <Link className="links" to="/">
               Design
            </Link>
            <Link className="links" to="/">
               Food
            </Link>
            <div className="userDetails">
               <span>{currentUser?.username}</span>
               {currentUser ? (
                  <Link className="link logooutbutton" to="/">
                     <span onClick={logout}>Logout</span>
                  </Link>
               ) : (
                  <Link className="link" to="/login">
                     Login
                  </Link>
               )}
            </div>
            <Link to="/write" className="write">
               Write
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
