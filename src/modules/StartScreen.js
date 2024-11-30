import React from "react";
import styles from "../css/StartScreen.module.css";

class StartScreen extends React.Component {
    render() {
        return (
            <header id="start" className={styles.startScreen}>
                <h1 className={styles.title}>Portfolio Website</h1>
                <div className={styles.scrollMessage}>
                    <span>아래로 내려보세요</span>
                    <span>↓</span>
                </div>
            </header>
        );
    }
}

export default StartScreen;
