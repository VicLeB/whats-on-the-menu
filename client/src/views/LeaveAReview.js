import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LeaveAReview({user, handleClose, show}) {
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
        <>
        <Modal  show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>We love to hear from you! Please leave a Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleReviewSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Title
                            <Form.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Content
                            <Form.Control as='textarea'  value={content} onChange={(e)=>setContent(e.target.value)}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Rating
                            <Form.Control type="number" min="1" max="5"value={rating} onChange={(e)=>setRating(e.target.value)}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Your First name
                            <Form.Control type="text" value={reviewerName} onChange={(e)=>setReviewerName(e.target.value)}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant='primary'>Submit</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Close</Button>
            </Modal.Footer>
            {errors? <Form.Text>{errors}</Form.Text>:<div>Review Submitted!</div>}
            </Modal>
        </>
    )
}

export default LeaveAReview
