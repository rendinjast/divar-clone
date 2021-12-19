import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../rootReducer';
import { AppThunk } from '../../store';
import cities from './cities';
import Cities from './cities';
import { CityType, IFinalCities } from './cities.type';

const initialState: IFinalCities = {
  topCities: [],
  otherCities: [],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    loadCities: (_, action: PayloadAction<IFinalCities>) => {
      return action.payload;
    },
  },
});

export const { loadCities } = citiesSlice.actions;

export const LoadCities = (): AppThunk => async (dispatch) => {
  // TODO: loading cities from Firebase Firestore
  const top = cities.top_cities;
  const topCities: CityType[] = [];
  cities.top_cities.forEach((city) => {
    const top = cities.cities.find((x) => x.slug === city);
    if (!top) return Error('city does not exist');
    topCities.push(top);
  });
  const otherCities: CityType[] = cities.cities.filter((c) => !top.includes(c.slug));
  dispatch(loadCities({ topCities, otherCities }));
};

export const CitiesSelector = (state: RootState) => state.cities;
export default citiesSlice.reducer;
