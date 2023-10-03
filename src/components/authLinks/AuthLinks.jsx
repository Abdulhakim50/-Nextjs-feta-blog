"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <>
         <Link href="/" onClick={() => alert("እባኮ ለመፃፍ መጀመሪያ Login ያድርጉ!!")} className={styles.link}>
            Write
          </Link>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
         
        </>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>

        <Link href="/" className={styles.l}>Homepage</Link>
  

        <Link href="/" className={styles.l}>About</Link>
        
      
 
        <Link href="/contact" className={styles.l} >Contact</Link>
 
        {status === "unauthenticated" ? (
          <>
            <Link href="/" onClick={() => alert("እባኮ ለመፃፍ መጀመሪያ Login ያድርጉ!!")} className={styles.link}>
            Write
          </Link>
          <Link href="/login" className={styles.l}>Login</Link>
         
          </>
          
        ) : (
          <>
           <Link href="/write" className={styles.l}>Write</Link>
          <span  onClick={signOut}>
              Logout
            </span>

          
          </>
        )}
      </div>
      )}
    </>
  );
};

export default AuthLinks;
