import {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Table from "./Table";
import Videos from "./Videos";
import Images from "./Images";
import Text from "./Text";

const pageMap = {
    text: "Text",
    images: "Images",
    videos: "Videos",
    table: "Table",
    email: "Email",
}

class TabList extends Component {
    static propTypes = {
        activeTab: PropTypes.number.isRequired,
        setActiveTab: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Fragment>
                {Object.keys(pageMap).forEach((pageKey) =>
                    <Tab onTabClick={() => this.props.setActiveTab(pageKey)} tabName={pageMap[pageKey]}/>
                )}
            </Fragment>
        );
    }
}

export class Tab extends Component {
    static propTypes = {
        tabName: PropTypes.string.isRequired,
        onTabClick: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default TabList;