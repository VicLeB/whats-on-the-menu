import React from 'react'
import Review from './Review'
import styled from "styled-components";

function ReviewsContainer({restaurant}) {
    const reviews = restaurant.reviews
    const separateReviews = reviews.map((review)=>{
        return <Review key={review.id} review={review}/>
    })

    return (
        <ReviewsWrapper>
            {separateReviews}
        </ReviewsWrapper>
    )
}

export default ReviewsContainer

const ReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    padding-left: 4%;
    padding-top: 2% ;
`