import React, { useState } from "react";
import { Shield, Lock, Mail } from "lucide-react";

const UserManagement = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userRole: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log("Creating user:", formData);

    // Reset form
    setFormData({ email: "", password: "", userRole: "" });
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New User</h2>
      <form onSubmit={handleCreateUser} className="space-y-4">
        <div>
          <label className="block mb-2">
            <Mail className="w-6 h-6 mb-1 text-slate-500" />
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="block mb-2">
            <Lock className="w-6 h-6 mb-1 text-slate-500" />
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
            placeholder="Enter password"
          />
        </div>
        <div>
          <label className="block mb-2">
            <Shield className="w-6 h-6 mb-1 text-slate-500" />
          </label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            required
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
          >
            <option value="">Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserManagement;
