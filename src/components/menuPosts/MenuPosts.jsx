import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"
import PopularLists from "../PopularLists/PopularLists";




const getData = async ()=>{
  const res = await fetch( 'https://aboutquran.vercel.app/api/PoularPost');


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
