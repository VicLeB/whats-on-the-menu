import React from 'react'
import Review from './Review'

function ReviewsContainer({restaurant}) {
    const reviews = restaurant.reviews
    const separateReviews = reviews.map((review)=>{
        return <Review key={review.id} review={review}/>
    })

    return (
        <div>
            {separateReviews}
        </div>
    )
}

export default ReviewsContainer