import React from 'react'
import { useParams } from 'react-router-dom'

// import components:
import ItemInfo from './ItemInfo'
import ReviewList from './ReviewList'

function Item() {
  const { id } = useParams()
  return (
    <>
      <main className="item-wrapper">
        <ItemInfo />
        <ReviewList dataId={id} />
      </main>
    </>
  )
}

export default Item
