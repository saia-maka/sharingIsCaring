import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../slices/items'

function ItemInfo() {
  const { id } = useParams()
  const itemData = useSelector((state) => state.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const item = itemData.find((item) => item.id === Number(id))

  function linkHandler() {
    navigate('/')
  }

  return (
    <>
      <section className="item-info-wrapper">
        <h2 className="item-title">{item.item_name}</h2>
        <h3 className="item-owner-name">By {item.contributor_name}</h3>
        <section className="item-link-wrapper">
          <button className="item-info-return-link" onClick={linkHandler}>
            Back to menu
          </button>
        </section>
        <br></br>
        <img src="../images/stars.svg"></img>
      </section>
    </>
  )
  }

export default ItemInfo
