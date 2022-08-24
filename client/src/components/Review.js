import React from 'react'

function Review({review}) {
  return (
    <div>
        <h3>{review.title}</h3>
        <p>{review.content}</p>
        <p>{review.rating}/5</p>
        <h4>-{review.reviewer_name}</h4>
    </div>
  )
}

export default Review