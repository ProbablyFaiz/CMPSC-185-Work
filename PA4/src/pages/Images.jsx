import {Component, Fragment} from 'react';

const imageLinks = [
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600357110l/55361205._SY475_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702l/37976541.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439433749l/4722934._SY475_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600357110l/55361205._SY475_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702l/37976541.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439433749l/4722934._SY475_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600357110l/55361205._SY475_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702l/37976541.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439433749l/4722934._SY475_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg",
]


class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {lightboxLink: null};
    }

    render() {
        return (
            <Fragment>
                <div className="photo-grid content-container">
                    {imageLinks.map((link, i) =>
                        <img className="photo-item"
                             src={link}
                             alt="Book cover"
                             key={i}
                             onClick={() => this.setState({lightboxLink: link})}
                        />
                    )}
                </div>
                {this.state.lightboxLink != null &&
                <div style={{display: "block"}} id="media-modal" onClick={() => this.setState({lightboxLink: null})}>
                    <div id="modal-content" onClick={e => e.stopPropagation()}>
                        <img className="photo-item"
                             src={this.state.lightboxLink}
                             alt="Book cover"
                             style={{margin: "0 auto", height: "600px"}}
                        />
                    </div>
                </div>}
            </Fragment>
        );
    }
}

export default Images;