import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";


const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
     
      <h2 className={styles.subtitle}>Chosen by Author</h2>
      <h1 className={styles.title}>Author Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
