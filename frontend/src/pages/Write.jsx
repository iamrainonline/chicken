import React, { useState } from "react";

const Write = () => {
   const [value, setValue] = useState("");

   const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value);
   };

   return (
      <div className="add">
         <div className="content">
            <input type="text" placeholder="Title ..." />
            <textarea
               placeholder="Your text goes here ..."
               onChange={handleChange}
               name=""
               id=""
               cols="30"
               rows="10"
               value={value}
            >
               {value}
            </textarea>
         </div>
         <div className="menu">
            <div className="item">
               <h1>Publish</h1>
               <span>
                  <b>Status: </b> Draft{" "}
               </span>
               <input style={{ display: "none" }} type="file" id="file" />
               <label htmlFor="file">Upload Image</label>
               <div className="buttons">
                  <button>Save</button>
                  <button>Update</button>
               </div>
            </div>
            <div className="item">
               <h1>Category</h1>
               <div className="cat">
                  <input type="radio" name="cat" value="art" id="art" />
                  <label htmlFor="art">Art</label>
               </div>
               <div className="cat">
                  <input type="radio" name="cat" value="science" id="science" />
                  <label htmlFor="science">Science</label>
               </div>
               <div className="cat">
                  <input
                     type="radio"
                     name="cat"
                     value="technology"
                     id="technology"
                  />
                  <label htmlFor="technology">Technology</label>
               </div>
               <div className="cat">
                  <input type="radio" name="cat" value="design" id="design" />
                  <label htmlFor="design">Design</label>
               </div>
               <div className="cat">
                  <input type="radio" name="cat" value="food" id="id" />
                  <label htmlFor="id">Food</label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Write;
