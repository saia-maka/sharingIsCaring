import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItems, postItem } from '../apis/api'

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  return await getItems()
})

export const addItem = createAsyncThunk('items/addItem', async (item) => {
  return await postItem(item)
})

const slice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectItems = (state) => state.items
export default slice.reducer
