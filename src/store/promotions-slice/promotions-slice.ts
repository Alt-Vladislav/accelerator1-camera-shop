import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchPromotions } from './promotions-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'promotions'> = {
  promotions: { data: [], loadingStatus: LoadingStatus.Unknown },
};


export const promotionsSlice = createSlice({
  name: SliceName.Promotions,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromotions.pending, (state) => {
        state.promotions.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchPromotions.fulfilled, (state, action) => {
        state.promotions.data = action.payload;
        state.promotions.loadingStatus = LoadingStatus.Loaded;
      })
      .addCase(fetchPromotions.rejected, (state) => {
        state.promotions.data = [];
        state.promotions.loadingStatus = LoadingStatus.Error;
      });
  }
});
