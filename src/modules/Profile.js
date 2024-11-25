import React from "react";
import styles from "../css/Profile.module.css";

const Profile = () => {
    return (
        <section id="profile">
            <h1>Profile</h1>
            <div className={styles.profile_infos}>
                <div></div>
                {/* <img /> */}
                <div class={styles.profile_info}>
                    <span>이름: 박종호</span>
                    <span>생년월일: 1999년 03월 21일</span>
                    <span>사는 곳: Seoul</span>
                    <span>E-mail: parkjh99365@gmail.com</span>
                    <span>학교: 인하공업전문대학</span>
                    <div class={styles.profile_links}>
                        <button>
                            <a href="https://github.com/jhdgo1225">GitHub</a>
                        </button>
                        <button>
                            <a href="https://solved.ac/profile/jhpark991230">
                                Baekjoon
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
