import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
   const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
   });
   const [err, setError] = useState(null);

   const navigate = useNavigate();

   const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.post("/auth/register", inputs);
         setError(null);
         navigate("/login");
      } catch (err) {
         console.log(err);
         setError(err.response.data);
      }
   };
   return (
      <div className="auth">
         <h1>Register</h1>
         <form action="" onSubmit={handleSubmit}>
            <input
               name="username"
               required
               type="text"
               placeholder="username"
               onChange={handleChange}
            />
            <input
               name="email"
               required
               type="email"
               placeholder="email"
               onChange={handleChange}
            />
            <input
               name="password"
               required
               type="password"
               placeholder="password"
               onChange={handleChange}
            />
            <button type="submit">Register</button>
            {err && <p>{err}</p>}
            <span>
               Already have an account?
               <br />
               <Link to="/login">Login</Link>
            </span>
         </form>
      </div>
   );
};

export default Register;
