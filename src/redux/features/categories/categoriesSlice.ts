import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryType, CurrentCategoryType, ICategoryState } from '../../../types';
import { RootState } from '../../rootReducer';
import { AppThunk } from '../../store';
import Categories from './categories.initialState';
import CategoryHelper from '../../../helpers/categoryHelper'

const initialState: ICategoryState = {
  categories: [] as CategoryType[],
  currentCategory: {} as CurrentCategoryType,
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    loadCategories: (state, action: PayloadAction<CategoryType[]>) => {
      return { ...state, categories: action.payload };
    },
    changeCurrentCategory: (state, action: PayloadAction<CurrentCategoryType>) => {
      return { ...state, currentCategory: action.payload };
    },
  },
});

export const { loadCategories, changeCurrentCategory } = categoriesSlice.actions;

export const LoadCategories = (): AppThunk => async (dispatch) => {
  // TODO: loading categories from Firebase Firestore
  dispatch(loadCategories(Categories));
};
export const ChangeCurrentCategory =
  (slug: string = 'root', categories: CategoryType[]): AppThunk =>
  (dispatch) => {
    const filteredCategory = CategoryHelper(categories,slug)
    dispatch(changeCurrentCategory(filteredCategory!));
  };
export const CategoriesSelector = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
