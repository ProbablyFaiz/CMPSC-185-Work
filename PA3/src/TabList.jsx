import {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {PageMap} from "./App";

class TabList extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        setActiveTab: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="navbar">
                {Object.keys(PageMap).map((pageKey) =>
                    <Tab active={pageKey === this.props.activeTab} onTabClick={() => this.props.setActiveTab(pageKey)}
                         tabName={PageMap[pageKey]["name"]}/>
                )}
            </div>
        );
    }
}

export class Tab extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        tabName: PropTypes.string.isRequired,
        onTabClick: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Fragment>
                <span className={this.props.active ? "current" : ""} onClick={() => this.props.onTabClick()}>
                    {this.props.tabName}
                </span>
            </Fragment>
        )
    }
}

export default TabList;