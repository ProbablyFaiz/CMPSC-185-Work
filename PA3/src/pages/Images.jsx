import {Component} from 'react';

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
    render() {
        return (
            <div className="photo-grid content-container">
                {imageLinks.map((link, i) =>
                    <img className="photo-item"
                         src={link}
                         alt="Book cover"
                         key={i}
                    />
                )}
            </div>
        );
    }
}

export default Images;