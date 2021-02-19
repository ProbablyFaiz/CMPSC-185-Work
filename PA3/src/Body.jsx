import {Component} from "react";
import PropTypes from "prop-types";
import {PageMap} from "./App";


class Body extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        setActiveTab: PropTypes.func.isRequired,
    }

    render() {
        const CurrentPage = PageMap[this.props.activeTab].component;
        return (<CurrentPage/>);
    }
}

export default Body;