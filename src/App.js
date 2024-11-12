import React from "react";
import StartScreen from "./modules/StartScreen";
import MainScreen from "./modules/MainScreen";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener("wheel", this.handleScroll);
    }

    handleScroll(event) {
        const { page } = this.state;
        if (event.deltaY > 0 && page < 1) {
            // 다음 페이지로 이동
            this.setState({ page: page + 1 });
        }
    }
    render() {
        const { page } = this.state;
        const pages = [<StartScreen />, <MainScreen />];
        return <div>{pages[page]}</div>;
    }
}

export default App;
