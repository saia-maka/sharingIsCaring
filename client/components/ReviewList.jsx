import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItemReviews } from '../slices/reviews'

// import components:
import Review from './Review'
import ReviewInput from './ReviewInput'

function ReviewList() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const reviewData = useSelector((state) => state.reviews)
  useEffect(async () => {
    dispatch(fetchItemReviews(id))
  }, [])

  return (
    <>
      <main className="review-list-wrapper">
        <h2 className="review-list-title">Reviews .</h2>
        <ReviewInput />
        {reviewData.map((review) => {
          return (
            <Review
              key={review.id}
              name={review.reviewer_name}
              review={review.review}
              profileImg={review.profile_image}
            />
          )
        })}
      </main>
    </>
  )
}

export default ReviewList
