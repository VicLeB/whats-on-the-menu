import React, { useState, useEffect} from 'react'

function LeaveAReview() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [reviewerName, setReviewerName] = useState("")
    const [rating, setRating] = useState(null)

    function handleReviewSubmit(e){
        e.preventDefault();


    }

    return (
        <div>
            <h1>We love to hear from you! Please leave a Review</h1>
            <form onSubmit={handleReviewSubmit}>
                <label>
                    Title
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </label>
                <label>
                    Content
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}/>
                </label>
                <label>
                    Rating
                    <select value={rating} onChange={(e)=>setRating(e.target.value)}>
                        <option selected value={5}>5</option>
                        <option value={4}>4</option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                        <option value={1}>1</option>
                    </select>
                </label>
                <label>
                    Your First name
                    <input type="text" value={reviewerName} onChange={(e)=>setReviewerName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default LeaveAReview