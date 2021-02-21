import {Component, Fragment} from "react";

class ScrollButton extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollFraction = window.pageYOffset / window.innerHeight;
        this.setState({visible: scrollFraction > 0.25});
    }

    render() {
        return (
            <Fragment>
                {this.state.visible && <button id="scroll-button" onClick={() => window.scrollTo(0, 0)}>Scroll to top</button>}
            </Fragment>
        );
    }
}

export default ScrollButton;
