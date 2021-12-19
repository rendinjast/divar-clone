import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (defaultMiddleware) => [...defaultMiddleware()],
  // middleware: (default) => default
});
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export default store;
