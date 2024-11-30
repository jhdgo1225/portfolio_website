import React from "react";
import styles from "../css/Profile.module.css";
import github_img from "../img/github_logo.png";
import baekjoon_img from "../img/baekjoon_logo.png";

const Profile = () => {
    return (
        <section id="profile">
            <h1>Profile</h1>
            <div className={styles.profile_infos}>
                <div></div>
                <div className={styles.profile_info}>
                    <span>이름: 박종호</span>
                    <span>생년월일: 1999년 03월 21일</span>
                    <span>사는 곳: Seoul</span>
                    <span>E-mail: parkjh99365@gmail.com</span>
                    <span>학교: 인하공업전문대학</span>
                    <div className={styles.profile_links}>
                        <button>
                            <img
                                src={github_img}
                                alt="GitHub"
                                width="18"
                                height="18"
                            />
                            <a href="https://github.com/jhdgo1225">GitHub →</a>
                        </button>
                        <button>
                            <img
                                src={baekjoon_img}
                                alt="Baekjoon"
                                width="18"
                                height="18"
                            />
                            <a href="https://solved.ac/profile/jhpark991230">
                                Baekjoon →
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
