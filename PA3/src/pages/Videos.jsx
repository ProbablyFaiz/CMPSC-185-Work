import {Component, Fragment} from 'react';

const videoLinks = [
   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
]


class Videos extends Component {
    render() {
        return (
            <div className="photo-grid content-container">
                {videoLinks.map((link, i) =>
                    <video className="photo-item" height="250" key={i}>
                        <source src={link} type="video/mp4"/>
                    </video>
                )}
            </div>
        );
    }
}

export default Videos;