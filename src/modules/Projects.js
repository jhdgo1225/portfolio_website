import React from "react";
import styles from "../css/Projects.module.css";

const Projects = () => {
    const name = ["한국어 글쓰기 비서", "Web Server(HTTP/1.1)"];
    const aim = [
        "영어 글쓰기 AI 서비스 중 하나인 Grammarly의 맞춤법, 문법 검사 방식을 한국어 글쓰기에도 적용하고 싶었습니다. 한국어의 맞춤법 검사 중에서 한국어의 띄어쓰기 기능을 중점으로 3개월간 프로젝트를 진행했습니다.",
        "Web 통신을 이루는 HTTP 프로토콜을 공부하고 HTTP 1.1 표준을 지킨 웹 서버를 구현했습니다.",
        "",
    ];
    const description = [
        [
            "한국어 띄어쓰기 지도 학습 데이터셋으로 BERT 언어 모델에 학습을 진행했습니다.",
            "Grammarly 서비스의 특징 중 하나인 크롬 익스텐션 제공을 본 서비스에 적용했습니다.",
            "한국어 글을 검사한 이전과 검사 이후의 내용을 비교하는 기능을 구현하고 이 기능을 통해 어떤 위치에서 띄어쓰기가 잘못됐는 지를 보여줄 수 있도록 만들었습니다.",
        ],
        [
            "RFC 9110 - HTTP Semantics 문서를 참고하여 HTTP 1.1 버전의 웹서버를 C++98 언어로 구현했습니다.",
            "Multiplexing 기반의 non-blocking I/O 방식을 선택했습니다.",
            "RFC 3875 - The Common Gateway Interface (CGI) Version 1.1 문서를 참고하여 CGI를 구현했습니다.",
        ],
    ];
    const date = ["2023년 3월 ~ 2023년 6월", "2024년 8월 ~ 2024년 9월"];
    const tools = [
        "HTML, CSS, JavaScript, Python, Django",
        "C++, HTML, CSS, JavaScript, Python, PHP",
    ];
    const [location, moveTo] = React.useState(0);
    const left = () => {
        moveTo((cur) => (cur - 1 < 0 ? name.length - 1 : cur - 1));
        console.log(location);
    };
    const right = () => {
        moveTo((cur) => (cur + 1) % name.length);
        console.log(location);
    };
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className={styles.projects}>
                <button className={styles.move_btn} onClick={left}>
                    &lt;
                </button>
                <div className={styles.project_info}>
                    <span className={styles.project_name}>
                        {name[location]}
                    </span>
                    <span>
                        <span className={styles.project_section}>
                            프로젝트 목표
                        </span>
                        : {aim[location]}
                    </span>
                    <span>
                        <span className={styles.project_section}>
                            프로젝트 내용
                        </span>
                        <span className={styles.project_content_item}>
                            • {description[location][0]}
                        </span>
                        <span className={styles.project_content_item}>
                            • {description[location][1]}
                        </span>
                        <span className={styles.project_content_item}>
                            • {description[location][2]}
                        </span>
                    </span>
                    <span>
                        <span className={styles.project_section}>
                            프로젝트 기간
                        </span>
                        : {date[location]}
                    </span>
                    <span>
                        <span className={styles.project_section}>사용 툴</span>:{" "}
                        {tools[location]}
                    </span>
                    <span>
                        <span className={styles.project_section}>
                            GitHub 링크
                        </span>
                        : {}
                    </span>
                </div>
                <button className={styles.move_btn} onClick={right}>
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default Projects;
