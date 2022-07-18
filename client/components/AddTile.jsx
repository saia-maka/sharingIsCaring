import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, fetchItems } from '../slices/items'

function AddTile() {
  const [contributorName, setContributorName] = useState('')
  const [itemName, setItemName] = useState('')

  const dispatch = useDispatch()

  function contributorHandler(e) {
    setContributorName(e.target.value)
  }
  function itemHandler(e) {
    setItemName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(
      addItem({
        item_name: itemName,
        contributor_name: contributorName,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(fetchItems())
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <form className="add-tile-wrapper" onSubmit={handleSubmit}>
        <input
          className="add-tile-input"
          placeholder="Enter contributor name"
          onChange={contributorHandler}
        />
        <input
          className="add-tile-input"
          placeholder="Enter item name"
          onChange={itemHandler}
        />
        <button type="submit" className="add-tile-btn">
          Add
        </button>
      </form>
    </>
  )
}

export default AddTile
