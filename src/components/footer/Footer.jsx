import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/q.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>ስለ ቁርአን</h1>
        </div>
        <p className={styles.desc}>
        ስለ ቁርአን እና  ስለሌሎች  ኢስላም ነክ ስለሆኑ ነገሮች ያንብቡ እንዲሁም እርሶም ያጋሩን!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>መለያዎች</span>
          <Link href="/">ሜቲዮሮሎጂ</Link>
          <Link href="/">ባዮሎጂ</Link>
          <Link href="/">ፊዚክስ</Link>
          <Link href="/">ሥነ ፈለክ</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
