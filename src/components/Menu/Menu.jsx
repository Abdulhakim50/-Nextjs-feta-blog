import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";


const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"ምን አለ"}</h2>
      <h1 className={styles.title}>በጣም የተወደዱ</h1>
      <MenuPosts withImage={false} />
     
 
      <h1 className={styles.title}>የፀሀፊው ምርጫ</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
