"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import { Animat } from "../motion/Animat";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <Animat>
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
    </Animat>
  );
};

export default Pagination;
