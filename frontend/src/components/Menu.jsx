import React from "react";

const Menu = () => {
   const posts = [
      {
         id: 1,
         title: "lorem dolor sit amet consectetur",
         desc: "lorem ipsum dolor sit amet consecteur",
         img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         id: 2,
         title: "lorem dolor sit amet consectetur",
         desc: "lorem ipsum dolor sit amet consecteur",
         img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         id: 3,
         title: "lorem dolor sit amet consectetur",
         desc: "lorem ipsum dolor sit amet consecteur",
         img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         id: 4,
         title: "lorem dolor sit amet consectetur",
         desc: "lorem ipsum dolor sit amet consecteur",
         img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         id: 5,
         title: "lorem dolor sit amet consectetur",
         desc: "lorem ipsum dolor sit amet consecteur",
         img: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         id: 6,
         title: "lorem dolor sit amet consectetur",
         desc: "lorem ipsum dolor sit amet consecteur",
         img: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
   ];
   return (
      <div className="menu">
         <h1>Other posts you may like</h1>
         {posts.map((post) => (
            <div className="post" key={post.id}>
               <img src={post.img} alt="" />
               <h2>{post.title}</h2>
               <button>Read More</button>
            </div>
         ))}
      </div>
   );
};

export default Menu;
