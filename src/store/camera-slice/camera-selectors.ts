import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getCameraState = (state: State) => state[SliceName.Camera];

const selectCamera = createSelector(
  getCameraState,
  (cameraState) => cameraState.camera
);

const selectSimilarCameras = createSelector(
  getCameraState,
  (cameraState) => cameraState.similarCameras
);

const selectReviews = createSelector(
  getCameraState,
  (cameraState) => cameraState.reviews
);

export { selectCamera, selectSimilarCameras, selectReviews };
