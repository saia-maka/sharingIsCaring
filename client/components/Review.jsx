import React, { useEffect } from 'react'

function Review(props) {
  return (
    <>
      <section className="review-wrapper">
        <section className="reviewer-info-wrapper">
          <img
            className="reviewer-profile-img"
            src={props.profileImg}
            alt="profile"
          />
          <h3 className="review-name">{props.name}</h3>
        </section>
        <section className="reviewer-comment-wrapper">
          <p className="review-comment">{props.review}</p>
        </section>
      </section>
    </>
  )
}

export default Review
