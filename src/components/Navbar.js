import React from "react";
import styles from "../css/Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_management}>
                <h1>Portfolio Websit</h1>
                <button className={styles.navbtn}>
                    <span></span>
                </button>
                <div className={styles.navbar_list}>
                    <ul>
                        <li className={styles.navbar_item}>
                            <a href="#profile">Profile</a>
                        </li>
                        <li className={styles.navbar_item}>
                            <a href="#about">About</a>
                        </li>
                        <li className={styles.navbar_item}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className={styles.navbar_item}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
