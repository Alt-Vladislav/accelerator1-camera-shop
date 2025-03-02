import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchCamera, fetchSimilarCameras, fetchReviews } from './camera-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'camera' | 'similarCameras' | 'reviews'> = {
  camera: { data: null, loadingStatus: LoadingStatus.Unknown },
  similarCameras: { data: [], loadingStatus: LoadingStatus.Unknown },
  reviews: { data: [], loadingStatus: LoadingStatus.Unknown }
};


export const cameraSlice = createSlice({
  name: SliceName.Camera,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamera.pending, (state) => {
        state.camera.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.camera.data = action.payload;
        state.camera.loadingStatus = LoadingStatus.Loaded;
      })
      .addCase(fetchCamera.rejected, (state) => {
        state.camera.data = initialSLiceState.camera.data;
        state.camera.loadingStatus = LoadingStatus.Error;
      })
      .addCase(fetchSimilarCameras.pending, (state) => {
        state.similarCameras.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchSimilarCameras.fulfilled, (state, action) => {
        state.similarCameras.data = action.payload;
        state.similarCameras.loadingStatus = LoadingStatus.Loaded;
      })
      .addCase(fetchSimilarCameras.rejected, (state) => {
        state.similarCameras.data = initialSLiceState.similarCameras.data;
        state.similarCameras.loadingStatus = LoadingStatus.Error;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.reviews.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
        state.reviews.loadingStatus = LoadingStatus.Loaded;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews.data = initialSLiceState.reviews.data;
        state.reviews.loadingStatus = LoadingStatus.Error;
      });
  }
});
