import {Component, Fragment} from 'react';

const videoLinks = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
]


class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {lightboxLink: null};
    }

    render() {
        return (
            <Fragment>
                <div className="photo-grid content-container">
                    {videoLinks.map((link, i) =>
                        <video className="photo-item" onClick={() => this.setState({lightboxLink: link})} height="250"
                               key={i}>
                            <source src={link} type="video/mp4"/>
                        </video>
                    )}
                </div>
                {this.state.lightboxLink != null &&
                <div style={{display: "block"}} id="media-modal" onClick={() => this.setState({lightboxLink: null})}>
                    <div id="modal-content" onClick={e => e.stopPropagation()}>
                        <video className="photo-item" height="400" controls style={{margin: "0 auto"}}>
                            <source src={this.state.lightboxLink} type="video/mp4"/>
                        </video>
                    </div>
                </div>}
            </Fragment>
        );
    }
}

export default Videos;