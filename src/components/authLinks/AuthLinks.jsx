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
<<<<<<< HEAD
      {status === "unauthenticated"? (
        <>
        <Link href="/login" className={styles.link}>
          Login
        </Link>
           <Link href="/write" className={styles.link}>
           Write
         </Link>
         </>
=======
      {status === "unauthenticated" ? (
        <>
         <Link href="/write" className={styles.link}>
            Write
          </Link>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
         
        </>
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
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
<<<<<<< HEAD
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <>
            <Link href="/login">Login</Link>
            <Link href="/write">Write</Link>
            </>
          ) : (
            <>
             <Link href="/write">Write</Link>
            <span  onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
=======
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status === "unauthenticated" ? (
          <>
           <Link href="/write">Write</Link>
          <Link href="/login">Login</Link>
         
          </>
        ) : (
          <>
           <Link href="/write">Write</Link>
          <span  onClick={signOut}>
              Logout
            </span>
          </>
        )}
      </div>
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
      )}
    </>
  );
};

export default AuthLinks;
