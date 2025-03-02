import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchCamera, fetchSimilarCameras, fetchReviews } from './camera-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'camera' | 'similarCameras' | 'reviews'> = {
  camera: { data: null, status: LoadingStatus.Unknown },
  similarCameras: { data: [], status: LoadingStatus.Unknown },
  reviews: { data: [], status: LoadingStatus.Unknown }
};


export const cameraSlice = createSlice({
  name: SliceName.Camera,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamera.pending, (state) => {
        state.camera.status = LoadingStatus.Loading;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.camera.data = action.payload;
        state.camera.status = LoadingStatus.Loaded;
      })
      .addCase(fetchCamera.rejected, (state) => {
        state.camera.data = initialSLiceState.camera.data;
        state.camera.status = LoadingStatus.Error;
      })
      .addCase(fetchSimilarCameras.pending, (state) => {
        state.similarCameras.status = LoadingStatus.Loading;
      })
      .addCase(fetchSimilarCameras.fulfilled, (state, action) => {
        state.similarCameras.data = action.payload;
        state.similarCameras.status = LoadingStatus.Loaded;
      })
      .addCase(fetchSimilarCameras.rejected, (state) => {
        state.similarCameras.data = initialSLiceState.similarCameras.data;
        state.similarCameras.status = LoadingStatus.Error;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.reviews.status = LoadingStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
        state.reviews.status = LoadingStatus.Loaded;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews.data = initialSLiceState.reviews.data;
        state.reviews.status = LoadingStatus.Error;
      });
  }
});
