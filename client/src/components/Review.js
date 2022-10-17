import React from 'react'
import styled from "styled-components";

function Review({review}) {
  return (
    <ReviewWrapper>
        <ReviewTitle>{review.title}</ReviewTitle>
        <ReviewContent>{review.content}</ReviewContent>
        <ReviewRating>{review.rating}/5</ReviewRating>
        <ReviewerName>- {review.reviewer_name}</ReviewerName>
        <HorizontalLine/>
    </ReviewWrapper>
  )
}

export default Review

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const ReviewTitle = styled.h4`
  color: #e7f6f2;
`
const ReviewContent = styled.p`
  color: #e7f6f2;
  padding-left: 2%;
  font-style: italic;
`
const ReviewRating = styled.h6`
  color: #e7f6f2;
  padding-left: 2%;
`
const ReviewerName = styled.h6`
  color: #e7f6f2;
  padding-left: 2%;
`

const HorizontalLine = styled.hr`
    background: black;
    color: black;
    height: 2px;
`