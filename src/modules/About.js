import React from "react";
import styles from "../css/About.module.css";

const About = () => {
    return (
        <section id="about">
            <h1>About</h1>
            <div className={styles.about}>
                <span>안녕하세요. 프론트엔드 개발자 박종호입니다.</span>
                <p>
                    <span>
                        저는 웹사이트의 디자인과 사용자 경험을 직접 설계하는
                        것을 좋아합니다.
                    </span>
                    지금까지 만든 프로젝트 모두 제 스스로 디자인 설계서, UI/UX
                    설계서를 작성하고 이를 기반으로 웹사이트를 구현했습니다.
                </p>
                <p>
                    <span>
                        저는 웹서비스 개발과 함께 웹 기술도 직접 구현하면서
                        공부해봤습니다.
                    </span>
                    HTTP 1.1 표준을 준수한 웹서버를 개발함으로써 웹 개발을 하기
                    전에 웹이 무엇이고 웹 통신과정이 어떻게 이루어지는 지를
                    공부했습니다. 웹서비스에 적용되는 툴이 웹브라우저에서 어떻게
                    동작하는지 항상 호기심을 가지고 있습니다.
                </p>
                <p>
                    <span>
                        저는 사용자의 생산성 향상을 위한 AI 기능도
                        만들어봤습니다.
                    </span>
                    '한국어 글쓰기 비서'라는 프로젝트를 학교에서 3개월간
                    진행했습니다. 한국어 맞춤법 중에서 띄어쓰기 보정을 중점으로
                    띄어쓰기 적용을 위한 자연어 처리 모델을 다른 사람의 모델
                    구현을 참고하여 만들어서 기능을 적용해봤습니다.
                </p>
            </div>
        </section>
    );
};

export default About;
