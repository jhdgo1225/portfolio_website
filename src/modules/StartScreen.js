import React from "react";
import styles from "../css/StartScreen.module.css";

class ScrollMessage extends React.Component {
    render() {
        return (
            <div className={styles.scrollMessage}>
                <span>아래로 내려보세요</span>
                <span>↓</span>
            </div>
        );
    }
}

class ButtonSet extends React.Component {
    render() {
        return (
            <div className={styles.buttonSet}>
                <button>Profile</button>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        );
    }
}

class StartScreen extends React.Component {
    render() {
        return (
            <header id="start" className={styles.startScreen}>
                <h1 className={styles.title}>Portfolio Website</h1>
                <ButtonSet />
                <ScrollMessage />
            </header>
        );
    }
}

export default StartScreen;
