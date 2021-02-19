import './App.css';
import {Component} from "react";
import TabList from "./TabList";
import Body from "./Body";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTabId: ""};
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
