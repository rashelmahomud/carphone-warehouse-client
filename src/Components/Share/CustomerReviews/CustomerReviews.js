import React, { useEffect, useState } from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const [reviews, setREviews] = useState([]);
    useEffect(() => {
                const url = 'http://localhost:5000/reviews';
                fetch(url)
                    .then(res => res.json())
                    .then(data => setREviews(data))
            }, [])


    return (
        <div>
            <h1 className='my-3'>Customer Reviews</h1>
            <div className='reviews'>
                {
                    reviews.map(review => <div key={review.id} className='customer'>
                        <img src={review.img} alt="" />
                        <h3>--{review.name}</h3>
                        <p>{review.description}</p>

                    </div>)
                }
            </div>
            
        </div>
    );
};

export default CustomerReviews;