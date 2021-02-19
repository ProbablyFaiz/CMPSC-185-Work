import './App.css';
import {Component} from "react";
import TabList from "./TabList";
import Body from "./Body";
import Text from "./Text";
import Images from "./Images";
import Videos from "./Videos";
import Table from "./Table";
import Email from "./Email";

export const PageMap = {
    text: {
        name: "Text",
        component: Text,
    },
    images: {
        name: "Images",
        component: Images,
    },
    videos: {
        name: "Videos",
        component: Videos
    },
    table: {
        name: "Table",
        component: Table,
    },
    email: {
        name: "Email",
        component: Email,
    },
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTabId: "text"};
    }

    setActiveTab = (activeTabId) => {
        this.setState({activeTabId: activeTabId});
    }

    render() {
        return (
            <div className="App">
                <TabList activeTab={this.state.activeTabId} setActiveTab={this.setActiveTab}/>
                <Body activeTab={this.state.activeTabId} setActiveTab={this.setActiveTab}/>
            </div>
        );
    }
}

export default App;
