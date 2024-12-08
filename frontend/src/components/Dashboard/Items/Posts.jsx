import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Posts = () => {
  const [content, setContent] = useState("");

  // Custom toolbar configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "script",
    "indent",
    "color",
    "background",
    "font",
    "align",
    "link",
    "image",
  ];

  const handleSubmit = () => {
    // Here you would typically send the content to your backend
    console.log("Submitted content:", content);
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Post</h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Post Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post Content
        </label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Write your post here..."
          className="h-64"
        />
      </div>

      <div className="flex justify-between items-center mt-16">
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Post Category</option>
          <option>News</option>
          <option>Sports</option>
          <option>Technology</option>
          <option>Medicine</option>
          <option>Entertainment</option>
        </select>

        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};

export default Posts;
