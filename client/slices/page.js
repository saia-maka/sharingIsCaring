import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'page',
  initialState: ['home'],
  reducers: {
    setPage: (state, payload) => payload
  },
})

export const selectPage = (state) => state.page
export default slice.reducer
