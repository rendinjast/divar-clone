import { combineReducers } from '@reduxjs/toolkit';
import CategoriesReducer from './features/categories/categoriesSlice';
import filtersReducer from './features/filters/filtersSlice';
import citiesReducer from './features/cities/citiesSlice';
import schemaReducer from './features/schema/schemaSlice';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  filters: filtersReducer,
  cities: citiesReducer,
  schema: schemaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
