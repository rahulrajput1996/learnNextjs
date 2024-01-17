import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
  const [allFiles, setAllFiles] = useState(props.json1);
  const [allFilesData, setAllFilesData] = useState(props.json2);
  const [count, setCount] = useState(2);

  // const fetchAllFilesName = async () => {
  //   try {
  //     let data1 = await fetch("http://localhost:3000/api/blogs");
  //     let data2 = await fetch("http://localhost:3000/api/allBlogs");
  //     let json1 = await data1.json();
  //     let json2 = await data2.json();
  //     setAllFiles(json1);
  //     setAllFilesData(json2);
  //   } catch (error) { }
  // };

  // useEffect(() => {
  //   fetchAllFilesName();
  // }, []);

  const fetchData = async () => {
    try {
      let data2 = await fetch(`http://localhost:3000/api/allBlogs?count=${count + 2}`);
      let json2 = await data2.json();
      console.log(json2)
      setAllFilesData(json2);
      setCount(count + 2)
    } catch (error) {
    }
  }

  return (
    <>
      <InfiniteScroll
        dataLength={allFilesData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.lengtharr !== allFilesData.length}
        loader={<h4>Loading...</h4>}
        scrollThreshold={.99}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={styles.container}>
          {allFilesData?.map((item, index) => {
            return (
              <div key={index}>
                <Link href={`/blogpost/${allFiles[index]}`} className={styles.contchild}>
                  <h3>{item.title}</h3>
                </Link>
                <span>{item.metaDescription}</span>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Blog;

// export const getServerSideProps = async (context) => {
//   let data1 = await fetch("http://localhost:3000/api/blogs");
//   let data2 = await fetch("http://localhost:3000/api/allBlogs");
//   let json1 = await data1.json();
//   let json2 = await data2.json();

//   return {
//     props: {
//       json1, json2
//     }
//   }
// }

export async function getStaticProps() {
  let content = await fs.promises.readdir(`jsonContent`);
  let arr = [];
  for (let index = 0; index < 2; index++) {
    let content3 = fs.readFileSync(`jsonContent/${content[index]}`, "utf-8");
    arr.push(JSON.parse(content3));
  }
  // content.forEach((element) => {
  //   let content3 = fs.readFileSync(`jsonContent/${element}`, "utf-8");
  //   arr.push(JSON.parse(content3));
  // });
  return {
    props: {
      json1: content,
      json2: arr,
      lengtharr: content.length
    },
  };
}
