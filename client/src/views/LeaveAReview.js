import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

function LeaveAReview({user}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [reviewerName, setReviewerName] = useState("")
    const [rating, setRating] = useState(null)
    const [errors, setErrors] = useState([])

    const params = useParams()
    const history = useHistory()

    const restaurant_id = params.id
    const user_id = user.id
    const reviewer_name = reviewerName


    function handleReviewSubmit(e){
        e.preventDefault();
        fetch('/reviews',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({restaurant_id, user_id, title, content, reviewer_name, rating})
        })
        .then((resp) =>{
            if (resp.ok){
                resp.json().then(history.push('/'))
            } else{
                resp.json().then((error)=> setErrors(error.errors))
            }
        })
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
                    <input type="number" min="1" max="5"value={rating} onChange={(e)=>setRating(e.target.value)}/>
                </label>
                <label>
                    Your First name
                    <input type="text" value={reviewerName} onChange={(e)=>setReviewerName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {errors? <div>{errors}</div>:<div>Review Submitted!</div>}
        </div>
    )
}

export default LeaveAReview