import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchCameras } from './cameras-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'cameras'> = {
  cameras: { data: [], loadingStatus: LoadingStatus.Unknown },
};


export const camerasSlice = createSlice({
  name: SliceName.Cameras,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameras.pending, (state) => {
        state.cameras.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.cameras.data = action.payload;
        state.cameras.loadingStatus = LoadingStatus.Loaded;
      })
      .addCase(fetchCameras.rejected, (state) => {
        state.cameras.data = [];
        state.cameras.loadingStatus = LoadingStatus.Error;
      });
  }
});
