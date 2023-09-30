
import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";


const getData = async () => {
<<<<<<< HEAD
  const res = await fetch("http://localhost:3000/api/categories", {
=======
  const res = await fetch("https://feta-blogg.vercel.app/api/categories", {
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async ({cat}) => {
  const data = await getData();
 
    


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
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
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
