import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAdjective, getItemReviews, postItemReview } from '../apis/api'

export const fetchItemReviews = createAsyncThunk(
  'itemReviews/fetchItemReviews',
  async (itemId) => {
    return await getItemReviews(itemId)
  }
)

export const addItemReview = createAsyncThunk(
  'itemReviews/addItemReview',
  async (review) => {
    return await postItemReview(review)
  }
)

export const fetchAdjective = createAsyncThunk(
  'itemReviews/fetchAdjective',
  async () => {
    return await getAdjective()
  }
)

const slice = createSlice({
  name: 'itemReviews',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchItemReviews.fulfilled]: (state, { payload }) => payload,

    // [fetchAdjective.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectItemReviews = (state) => state.itemReviews
export default slice.reducer
