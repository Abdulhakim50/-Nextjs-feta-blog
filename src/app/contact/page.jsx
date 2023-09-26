import React from 'react'
import styles from "./contact.module.css";
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.con}>
   
      
   <p className={styles.p}>Contact Developer</p>
   <Link className={styles.link}href='https://mail.google.com/'>Gmail: laqimabd@gmail.com</Link>
  
    </div>
  )
}

export default page