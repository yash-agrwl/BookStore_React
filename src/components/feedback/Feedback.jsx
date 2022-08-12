import React from 'react'
import './Feedback.css'
import Rating from '@mui/material/Rating';

function Feedback(props) {
    return (
        <div className="feedback_main-section">

            <div className="feedback_section1">YA</div>

            <div className="feedback_section2">

                <div className="feedback_username">{props.feedback.fullName}</div>

                <Rating id='feedback_rating' name="feedback-rating" value={props.feedback.rating} readOnly />

                <div className="feedback_comment">{props.feedback.comment}</div>

            </div>

        </div>
    )
}

export default Feedback