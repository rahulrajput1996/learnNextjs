import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from "../../styles/Blog.module.css"

const Myslog = () => {
    const router = useRouter();
    console.log(router)
    const { slug } = router.query;
    const [contentData, setContentData] = useState(null);

    const readFileSystem = async () => {
        try {
            let data = await fetch(`http://localhost:3000/api/blog?title=${slug}`);
            let response = await data.json()
            setContentData(response)
        } catch (error) {
        }
    }

    useEffect(() => {
        if (router.isReady) {
            readFileSystem();
        }
    }, [router.isReady])

    return (
        <>
            <div className={styles.container}>
                <div >
                    <h3 className={styles.contchild}>{slug}</h3>
                    <h3 className={styles.contchild}>{contentData?.title}</h3>
                    <span>{contentData?.content}</span>
                    <h3 style={{ textAlign: "center" }}>{contentData?.author}</h3>
                </div>
            </div>
        </>
    )
}

export default Myslog