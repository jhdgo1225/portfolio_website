import React from "react";
import styles from "../css/Contact.module.css";

const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <form className={styles.contact_form}>
                <p>
                    <label className={styles.label} for="name">
                        이름{" "}
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className={styles.form_input}></input>
                </p>
                <p>
                    <label className={styles.label} for="phone">
                        Phone{" "}
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={styles.form_input}></input>
                </p>
                <p>
                    <label className={styles.label} for="email">
                        E-mail{" "}
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className={styles.form_input}></input>
                </p>
                <div className={styles.button_set}>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
