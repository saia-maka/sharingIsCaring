import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits, selectFruits } from '../slices/fruits'

// import components:
import Header from './Header'
import TileList from './TileList'
import Item from './Item'

function App() {
  // const fruits = useSelector(selectFruits)
  // const dispatch = useDispatch()

  // useEffect(async () => {
  //   await dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<TileList />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
        {/* <Item /> */}
      </div>
    </>
  )
}

export default App
