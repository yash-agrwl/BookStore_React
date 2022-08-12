import React from 'react'
import './Quickview.css'
import bookimg from '../../assets/book-images/Image1@3x.png';
import StarIcon from '@mui/icons-material/Star';

function Quickview(props) {
    return (
        <div className="quickview_inner-box" onClick={() => props.openBook(props.book)}>

            <div className="quickview_section1">

                <img src={bookimg} alt='book-cover-img'/>

            </div>

            <div className="quickview_section2">

                <div className="quickview_book-details">

                    <div className="quickview_book-title">{props.book.bookName}</div>

                    <div className="quickview_book-author">by {props.book.author}</div>

                    <div className="quickview_book-review">

                        <div className="quickview_book-rating">

                            <div id='quickview_rating-star'>{props.book.rating}</div>

                            <StarIcon sx={{ width: '12px', height: '12px', color: '#FFFFFF' }} />

                        </div>

                        <div className="quickview_rating-count">({props.book.ratingCount})</div>

                    </div>

                    <div className="quickview_book-price">

                        <div className="quickview_price-discount">Rs. {props.book.discountPrice}</div>

                        <div className="quickview_price-original">Rs.{props.book.actualPrice}</div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Quickview