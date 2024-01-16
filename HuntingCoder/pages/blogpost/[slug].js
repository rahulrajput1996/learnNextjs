import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";
import * as fs from "fs";

const Myslog = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [contentData, setContentData] = useState(props.response);

  // const readFileSystem = async () => {
  //   try {
  //     let data = await fetch(`http://localhost:3000/api/blog?title=${slug}`);
  //     let response = await data.json();
  //     setContentData(response);
  //   } catch (error) { }
  // };

  // useEffect(() => {
  //   if (router.isReady) {
  //     readFileSystem();
  //   }
  // }, [router.isReady]);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h3 className={styles.contchild}>{slug}</h3>
          <h3 className={styles.contchild}>{contentData?.title}</h3>
          {/* <span>{contentData?.content}</span> */}
          <span
            dangerouslySetInnerHTML={createMarkup(contentData?.content)}
          ></span>
          <h3 style={{ textAlign: "center" }}>{contentData?.author}</h3>
        </div>
      </div>
    </>
  );
};
export default Myslog;

// export const getServerSideProps = async (context) => {
//   const { slug } = context.query;

//   const data = await fetch(`http://localhost:3000/api/blog?title=${slug}`);
//   const response = await data.json();

//   return {
//     props: {
//       response
//     }
//   }
// }

export async function getStaticPaths() {
  const content = await fs.promises.readdir(`jsonContent`);
  let arr = [];
  content.forEach((element) => {
    arr.push({ params: { slug: element } });
  });
  return {
    paths: arr,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const content = await fs.promises.readFile(`jsonContent/${slug}`, "utf-8");
  return {
    props: { response: JSON.parse(content) },
  };
}
