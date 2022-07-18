import { configureStore } from '@reduxjs/toolkit'

import items from './slices/items'
import reviews from './slices/reviews'
import page from './slices/page'

const store = configureStore({
  reducer: {
    items,
    reviews,
    page,
  },
})

export default store
