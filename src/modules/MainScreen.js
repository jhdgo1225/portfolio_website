import React from "react";
import styles from "../css/MainScreen.module.css";
import Nav from "../components/Nav";
import Profile from "../modules/Profile";
import About from "../modules/About";
import Projects from "../modules/Projects";
import Contact from "../modules/Contact";

class MainScreen extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <main className={styles.mainScreen}>
                    <Profile />
                    <About />
                    <Projects />
                    <Contact />
                </main>
            </div>
        );
    }
}

export default MainScreen;
