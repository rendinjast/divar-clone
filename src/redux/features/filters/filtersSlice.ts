import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/rootReducer';
import { AppThunk } from 'src/redux/store';
import filters from './filtersInitialState';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filters,
  reducers: {
    // changeCategory: (state, action: PayloadAction<CurrentCategoryType>) => {
    //   return { ...state, currentCategory: action.payload };
    // },
  },
});

// export const { changeCategory } = filtersSlice.actions;

export const ChangeCategory = (): AppThunk => async (dispatch) => {
  // dispatch(loadfilters(filters));
};
export const filtersSelector = (state: RootState) => state.filters;
export default filtersSlice.reducer;
