import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	title: '',
	author: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			// You can mutate the state here because immer library is used to handle
			state.title = action.payload

			// The above code is equivalent to the following code:
			// return { ...state, title: action.payload}
		},
		setAuthorFilter: (state, action) => {
			state.author = action.payload
		},
		resetFilters: state => {
			return initialState
		}
	},
})

export const { setTitleFilter, resetFilters, setAuthorFilter } = filterSlice.actions

export const selectTitleFilter = state => state.filter.title
export const selectAuthorFilter = state => state.filter.author

export default filterSlice.reducer
