import {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Table from "./pages/Table";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Text from "./pages/Text";


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