import React, { useState } from 'react';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../css/review.css';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    const handlePublish = () => {
        if (newReview) {
            const review = {
                content: newReview,
                date: new Date().toLocaleDateString(),
            };
            setReviews([...reviews, review]);
            setNewReview('');
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 200) {
            setNewReview(inputValue);
        }
    };

    const handleDelete = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(index, 1);
        setReviews(updatedReviews);
    };

    return (
        <div className="reviews-TA">
            {reviews.map((review, index) => (
                <div key={index} className="box-reviews">
                    <p>{review.content}</p>
                    <div className="time">
                        <p>{review.date}</p>
                        <p onClick={() => handleDelete(index)}>
                            <RestoreFromTrashOutlinedIcon />
                        </p>
                    </div>
                </div>
            ))}
            <div className="up-reviews">
                <input
                    type="text"
                    placeholder="Type Reviews Here...."
                    value={newReview}
                    onChange={handleInputChange}
                    maxLength={200}
                />
                <div className="up-reviews-ta">
                    <p>
                        <span>{200 - newReview.length}</span> left
                    </p>
                    <button onClick={handlePublish} disabled={!newReview}>
                        PUBLISH
                        <ArrowUpwardIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
