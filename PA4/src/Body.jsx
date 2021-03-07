import {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {PageMap} from "./App";
import ScrollButton from "./ScrollButton";


class Body extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        setActiveTab: PropTypes.func.isRequired,
    }

    render() {
        const CurrentPage = PageMap[this.props.activeTab].component;
        return (
            <Fragment>
                <CurrentPage/>
                <ScrollButton/>
            </Fragment>
        );
    }
}

export default Body;