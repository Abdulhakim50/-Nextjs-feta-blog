import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { Animat } from "../motion/Animat";

const getData = async () => {
  const res = await fetch("https://aboutquran.vercel.app/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
  
    <div className={styles.container}>
      <h1 className={styles.title}>የተመረጡ ክፍሎች</h1>
      <Animat>
      <div className={styles.categories}>
        {data?.map((item) => (
        
          <Link
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
          
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={130}
                height={62}
                className={styles.image}
              />
            )}
       
            <div className={styles.content}>
           <h4>{item.title}</h4> 
            </div>
          </Link>
     ))}
      </div>
      </Animat>
    </div>
  )
};

export default CategoryList;
