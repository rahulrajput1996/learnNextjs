import Head from "next/head";
import styles from "@/styles/Home.module.css";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="coding blog, hunter blog,next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirqYc-PhjTULd_xX-crBAdHCMSaWsd7C0OQ&usqp=CAU"
        />
      </Head>
      <div className={styles.mainHeading}>
        <h1>Hunting Coder</h1>
        {/* <Image
          src="/myblog.jpg"
          alt=""
          width={300}
          height={200}
          className={styles.myimg}
          priority
        /> */}
        <img
          src="/myblog.jpg"
          alt=""
          width={300}
          height={200}
          className={styles.myimg}
        />
        <p>Search Create Solve and Repeat</p>
      </div>
      <div className={styles.BlogTemp}>
        <h2>Our Blogs</h2>
        <div>
          <h3>First Blog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quos optio quisquam. Architecto error odit mollitia quae tempora sit
            in!
          </p>
        </div>
      </div>
    </>
  );
}
