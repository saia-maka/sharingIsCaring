import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems, selectItems } from '../slices/items'

// import components:
import Tile from './Tile'
import AddTile from './AddTile'

function TileList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(async () => {
    dispatch(fetchItems())
  }, [])
  const itemsData = useSelector(selectItems)
  console.log(itemsData)

  function itemHandler(e, id) {
    navigate(`/item/${id}`)
  }

  return (
    <>
      <section className="tilelist-wrapper">
        {itemsData.map((product) => {
          return (
            <Tile
              key={product.id}
              titleName={product.item_name}
              itemHandler={(e) => itemHandler(e, product.id)}
            />
          )
        })}
      </section>
      <AddTile />
    </>
  )
}

export default TileList
