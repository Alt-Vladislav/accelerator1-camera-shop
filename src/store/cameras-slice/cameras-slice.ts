import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchCameras } from './cameras-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'cameras'> = {
  cameras: { data: [], status: LoadingStatus.Unknown },
};


export const camerasSlice = createSlice({
  name: SliceName.Cameras,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameras.pending, (state) => {
        state.cameras.status = LoadingStatus.Loading;
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.cameras.data = action.payload;
        state.cameras.status = LoadingStatus.Loaded;
      })
      .addCase(fetchCameras.rejected, (state) => {
        state.cameras.data = [];
        state.cameras.status = LoadingStatus.Error;
      });
  }
});
