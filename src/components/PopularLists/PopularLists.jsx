import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Animat } from "../motion/Animat";

 import styles from "./PoularLists.module.css"
const PopularLists = ({data,key}) => {
  return (
    <Animat>
    <Link href={`/posts/${data.slug}`} className={styles.item} key={key} >
   <div className={styles.items}></div>
      <div className={styles.imageContainer}>
        <Image src={data.img} alt="" fill className={styles.image} />
      </div>

    <div className={styles.textContainer}>
      <span className={`${styles.category} ${styles.travel}`}>{data.catSlug }</span>
      <h3 className={styles.postTitle}>
           {data.title}
          </h3>
      <div className={styles.detail}>
        <span className={styles.username}>{data.user}</span>
        <span className={styles.date}> {data.createdAt.substring(0, 10)} -{" "}</span>
      </div>
    </div>
    
  </Link>
  </Animat>
  )
}

export default PopularLists