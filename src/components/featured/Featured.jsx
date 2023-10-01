import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';
import { Animat } from "../motion/Animat";

const getData = async ()=>{
  const res = await fetch( 'https://feta-blogg.vercel.app/api/futuredPost',{
    cache:"no-store"
  });


      return   res.json();
};

const Featured = async () => {

  const posts = await getData();
  return (
    <>
    <Animat>
    <div className={styles.container}>
<h1 className={styles.title}>
  <b className="">የሚወዱትን ታሪክ ያጋሩ ፣ ታሪኮችን ይጋሩ</b> Discover Your Stories And Share Stories Of Others.
</h1>

  <h1 className={styles.Featured}>Featured Post</h1>
    {posts.map((item) =>(


<div className={styles.post}  key={item._id}>
  <div className={styles.imgContainer}>
    <Image src={item.img} alt="" fill className={styles.image} />
  </div>
  <div className={styles.textContainer}>
    <h1 className={styles.postTitle}>{item.title}</h1>
    <p className={styles.postDesc}>
    {item.desc}
    </p>
    <Link href={`/posts/${item.slug}`}  className={styles.button}>Read More</Link>
  </div>
</div>


    ))}
    </div>
    </Animat>
   
    </>
  );
};

export default Featured;
