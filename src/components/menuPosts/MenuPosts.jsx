import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"
import PopularLists from "../PopularLists/PopularLists";



const getData = async ()=>{
<<<<<<< HEAD
  const res = await fetch( 'http://localhost:3000/api/PoularPost');
=======
  const res = await fetch( 'https://feta-blogg.vercel.app/api/PoularPost');
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949


      return   res.json();
};

const MenuPosts =async () => {

     const posts = await getData();


  return (
    <>
   
      {posts?.map((item) =>(
       
       <PopularLists data={item} key={item._id}/>
      

      ))}
      </>
  
  );
};

export default MenuPosts;
