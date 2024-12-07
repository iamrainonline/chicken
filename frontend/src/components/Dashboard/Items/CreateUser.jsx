import React, { useState } from "react";
import { createUser } from "../../../API/Users";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, password };

    try {
      await createUser(newUser);
      console.log("User created successfully");
      // Clear the form
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-900">
        Create User
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              mt-2 p-2 w-full 
              border border-slate-300 
              rounded-md 
              bg-white 
              text-slate-900
              focus:ring-2 
              focus:ring-slate-500 
              focus:border-transparent
            "
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              mt-2 p-2 w-full 
              border border-slate-300 
              rounded-md 
              bg-white 
              text-slate-900
              focus:ring-2 
              focus:ring-slate-500 
              focus:border-transparent
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full 
            bg-slate-900 
            text-white 
            py-2 
            rounded-md 
            hover:bg-slate-800 
            transition 
            duration-200
          "
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
