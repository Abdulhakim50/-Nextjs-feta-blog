"use client"

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";
const ReactQuill=dynamic(()=> import("react-quill"),{ssr:false});


const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();


  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
   
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    
    file && upload();
    
 }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
<<<<<<< HEAD
    const res = await fetch("http://localhost:3000/api/posts", {
=======
    const res = await fetch("https://feta-blogg.vercel.app/api/posts", {
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
      method: "POST",
      body: JSON.stringify({
        title,
        desc:value,
        img: media,
        slug:slugify(title),
        catSlug: catSlug || "style", 
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`https://feta-blogg.vercel.app/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
  {status === "unauthenticated" ?(
<<<<<<< HEAD
    <Link href="/login">Login to to create Blog</Link>
=======
    <Link href="/login">Login to write a comment</Link>
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
  ):(
     <>
    <input
      type="text"
      placeholder="Title"
      className={styles.input}
      onChange={(e) => setTitle(e.target.value)}
    />
    <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
      <option value="Style">Style</option>
      <option value="Fashion">Fashion</option>
      <option value="Food">Food</option>
      <option value="Culture">Culture</option>
      <option value="Travel">Travel</option>
      <option value="Technology">Technology</option>
      <option value="Sport">Sport</option>
      <option value="Entertainment">Entertainment</option>
<<<<<<< HEAD
          <option value="Biology">Biology</option>
=======
          <option value="News">News</option>
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
    </select>
    <div className={styles.editor}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <Image src="/plus.png" alt="" width={16} height={16} />
      </button>
      {open && (
        <div className={styles.add}>
          <input
            type="file"
            id="image"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <button className={styles.addButton}>
            <label htmlFor="image">
              <Image src="/image.png" alt="" width={16} height={16} />
            </label>
          </button>
     
        </div>
      )}
      <ReactQuill
      // Display the content using ReactQuill with readOnly prop
        readOnly={false}
        className={styles.textArea}
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
      />
    </div>
    <button className={styles.publish} onClick={handleSubmit}>
      Publish
    </button>
    </>
     )}
  </div>

<<<<<<< HEAD
 
  
=======
>>>>>>> baf17a122a8bf51f170738f7de5af65dd40f7949
  );
};

export default WritePage;
