import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [allFiles, setAllFiles] = useState([]);
  const [allFilesData, setAllFilesData] = useState([]);

  const fetchAllFilesName = async () => {
    try {
      let data1 = await fetch("http://localhost:3000/api/blogs");
      let data2 = await fetch("http://localhost:3000/api/allBlogs");
      let json1 = await data1.json();
      let json2 = await data2.json();
      setAllFiles(json1);
      setAllFilesData(json2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllFilesName();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {allFiles?.map((item, index) => {
          return (
            <div key={index}>
              <Link href={`/blogpost/${item}`} className={styles.contchild}>
                <h3>{allFilesData[index].title}</h3>
              </Link>
              <span>{allFilesData[index].content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
