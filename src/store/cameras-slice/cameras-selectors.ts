import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';


const getCamerasState = (state: State) => state[SliceName.Cameras].cameras;

const selectCameras = createSelector(
  getCamerasState,
  (cameras) => cameras
);

export { selectCameras };
