import React, { useState } from 'react'
import styles from "../styles/contact.module.css"

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const handleChange = (e) => {
        if (e.target.name === "fname") {
            setname(e.target.value);
        }
        if (e.target.name === "femail") {
            setemail(e.target.value);
        }
        if (e.target.name === "fphone") {
            setphone(e.target.value);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        let a = await fetch("http://localhost:3000/api/contactUs", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ name, email, phone })
        })
        let res = await a.json();
        setname("")
        setemail("")
        setphone("")
        alert("Thanks for contacting us");
    }

    return (
        <>
            <div className={styles.container}>
                <h3>Contact Us</h3>
                <form onSubmit={submitForm} className={styles.form}>
                    <div className={styles.formdiv}>
                        <label htmlFor="fname1">First name:</label>
                        <br />
                        <input type="text" id="fname1" name="fname" value={name} onChange={handleChange} />

                    </div>
                    <div className={styles.formdiv}>
                        <label htmlFor="fname2">Email:</label>
                        <br />
                        <input type="email" id="fname2" name="femail" value={email} onChange={handleChange} />

                    </div>
                    <div className={styles.formdiv}>
                        <label htmlFor="fname3">Phone:</label>
                        <br />
                        <input type="tel" id="fname3" name="fphone" value={phone} onChange={handleChange} />

                    </div>
                    <button>Submit Form</button>
                </form>
            </div>
        </>
    )
}

export default Contact