import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { Animat } from "../motion/Animat";

const Card = ({ key, item }) => {
  return (
    <Animat>
        <hr className={styles.hr}/>
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
   
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.h}>{item.title}</h1>
        </Link>

        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        ....
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
      <div className={styles.cont}>
      <Image src="/eye.png" width={50} height={40}/>
      <h4 className={styles.h1}>{item.views}</h4>
      </div>
       
        
    </div>
  
    </Animat>
  );
};

export default Card;
