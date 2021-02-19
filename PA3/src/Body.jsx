import {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import Videos from "./Videos";
import Images from "./Images";
import Text from "./Text";


class Body extends Component {
    static propTypes = {
        activeTab: PropTypes.number.isRequired,
        setActiveTab: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

export default Body;