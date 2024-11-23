import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
   return (
      <div className="single">
         <div className="content">
            <img
               src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt=""
            />
            <div className="user">
               <img
                  src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
               />
               <div className="info">
                  <span>John</span>
                  <p>Posted 2 days ago</p>
               </div>
               <div className="edit">
                  <Link to="">Edit</Link>
                  <br />
                  <Link to="">Delete</Link>
               </div>
            </div>
            <h1>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
               corrupti?
            </h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
               atque itaque dolor iure accusamus facilis porro dolorum doloribus
               at officiis quisquam odio soluta ab distinctio illo quo, libero
               eligendi praesentium vitae nam hic impedit dolorem. Reprehenderit
               dolorem accusamus voluptatum? Eum eligendi provident assumenda
               cum alias repudiandae earum vero eos aliquam!
            </p>
         </div>
         <Menu />
      </div>
   );
};

export default Single;
