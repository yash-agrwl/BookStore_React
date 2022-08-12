import React from 'react'
import './Book.css'
import bookimg1 from '../../assets/book-images/Image1@4x.png'
import bookimg2 from '../../assets/book-images/Image1@1x.png'
import bookimg3 from '../../assets/book-images/Image1.2@1x.png'
import { Button, TextareaAutosize } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addFeedback, addToCart, getCartItems, updateCart } from '../../services/dataservice'

function Book(props) {
    const [rating, setRating] = React.useState(0);
    const [bookCount, setBookCount] = React.useState(0);
    const [addFeedbackObj, setAddFeedbackObj] = React.useState({ bookId: props.book.bookID, rating: 0, comment: '' });

    React.useEffect(() => {
        getCartItems().then((response) => {
            console.log(response);
            let check = response.data.data.filter((cart) => {
                if (cart.bookID === props.book.bookID) {
                    setBookCount(cart.bookCount)
                    return cart;
                }
                return {};
            })
        }).catch((error) => {
            console.log(error)
        })
        // eslint-disable-next-line
    }, [])

    const addBookToCart = () => {
        addToCart(props.book.bookID).then((response) => {
            console.log(response);
            setBookCount(1)
        }).catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        if (bookCount > 0) {
            updateCart(props.book.bookID, bookCount).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            })
        }
        // eslint-disable-next-line
    }, [bookCount])

    const counter = () => {
        return (
            <div className='book_update-count'>

                <div className="decrement-count" style={{ color: bookCount === 1 && '#DBDBDB' }}
                    onClick={() => bookCount !== 1 && setBookCount(bookCount - 1)}>

                    <RemoveIcon />

                </div>

                <div className="display-count">{bookCount}</div>

                <div className="increment-count" onClick={() => setBookCount(bookCount + 1)}>

                    <AddIcon />

                </div>

            </div>
        )
    }

    const submitFeedback = () => {
        console.log(addFeedbackObj)
        addFeedback(addFeedbackObj).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="book_outer-box">

            <div className="book_inner-box">

                <div className="book_header">

                    <div className="book_route">Home / Book(01)</div>

                </div>

                <div className="book_main-container">

                    <div className="book_section1">

                        <div className="book_extra-img-box book_selected-img">

                            <img src={bookimg2} alt='book-extra-img1' />

                        </div>

                        <div className="book_extra-img-box">

                            <img src={bookimg3} alt='book-extra-img2' />

                        </div>

                    </div>
                    <div className="book_section2">

                        <div className="book_primary-img-box">

                            <img src={bookimg1} alt='book-img-primary' />

                        </div>

                        <div className="book_button-group">

                            {(bookCount > 0) ?
                                counter()
                                :
                                <Button id='cart-btn' variant='contained' onClick={addBookToCart}>Add to bag</Button>
                            }

                            <Button id='wishlist-btn' variant='contained'>Wishlist</Button>

                        </div>

                    </div>

                    <div className="book_section3">

                        <div className="book_section3_info">

                            <div className="book_title">{props.book.bookName}</div>

                            <div className="book_author">by {props.book.author}</div>

                            <div className="book_review">

                                <div className="book_rating">

                                    <div id='book_rating-star'>{props.book.rating}</div>

                                    <StarIcon sx={{ width: '12px', height: '12px', color: '#FFFFFF' }} />

                                </div>

                                <div className="book_rating-count">({props.book.ratingCount})</div>

                            </div>

                            <div className="book-price">

                                <div className="book_price-discount">Rs. {props.book.discountPrice}</div>

                                <div className="book_price-original">Rs.{props.book.actualPrice}</div>
                            </div>

                        </div>

                        <div className="book_section3_details">

                            <div className="book_section3_details_heading">
                                Book Detail
                            </div>

                            <p>{props.book.bookDetail}</p>

                        </div>

                        <div className="book_section3_feedback">

                            <div className="book_section3_feedback_heading">Customer Feedback</div>

                            <div className="book_add-feedback">

                                <div className="book_rating_heading">Overall rating</div>

                                <Rating id='book_feedback-rating' name="feedback-rating" value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                        setAddFeedbackObj((prevState) => ({ ...prevState, rating: newValue }));
                                    }}
                                />

                                <TextareaAutosize id='book_write-review' typeof='text' placeholder='Write Your Review'
                                    value={addFeedbackObj.comment}
                                    onChange={(event) => {
                                        setAddFeedbackObj((prevState) => ({ ...prevState, comment: event.target.value }))
                                    }}
                                />

                                <Button id='book_feedback-submit' variant='contained' onClick={submitFeedback}>Submit</Button>

                            </div>

                            <div className="book_show-feedback">



                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Book