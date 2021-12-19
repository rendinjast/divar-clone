import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchemaType } from './schema.type';
import { RootState } from '../../rootReducer';
import { AppThunk } from '../../store';
import schemas from './schemas';

const initialState: SchemaType = {
  status: 'loading',
  data: null,
};

const SchemaSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    loadSchema: (_, action: PayloadAction<SchemaType>) => action.payload,
  },
});
export const { loadSchema } = SchemaSlice.actions;

export const LoadSchema =
  (slug: string): AppThunk =>
  (dispatch) => {
    // TODO get schema from firebase firestore
    dispatch(loadSchema({ status: 'loading' }));
    const schema = schemas[slug];

    if (schema) {
      dispatch(loadSchema({ status: 'success', data: schema }));
    } else {
      dispatch(loadSchema({ status: 'empty' }));
    }
  };

export const SchemaSelector = (state: RootState) => state.schema;

export default SchemaSlice.reducer;
