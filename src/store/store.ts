import { SliceName } from './consts';
import { promotionsSlice } from './promotions-slice/promotions-slice';
import { camerasSlice } from './cameras-slice/cameras-slice';
import { cameraSlice } from './camera-slice/camera-slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

const api = createAPI();

const combinedReducer = combineReducers({
  [SliceName.Promotions]: promotionsSlice.reducer,
  [SliceName.Cameras]: camerasSlice.reducer,
  [SliceName.Camera]: cameraSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: api }
    }),
});
