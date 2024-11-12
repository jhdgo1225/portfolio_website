import React from "react";
import styles from "../css/MainScreen.module.css";

class MainScreen extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <button></button>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </nav>
                <main className={styles.mainScreen}>
                    <h1 className={styles.subHeader}>Test</h1>
                </main>
            </div>
        );
    }
}

export default MainScreen;
