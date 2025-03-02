import { Camera, Review } from '../../types';
import { ThunkApiConfig } from '../types';
import { APIRoute, SliceName } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCamera = createAsyncThunk<Camera, { id: string }, ThunkApiConfig>(
  `${SliceName.Camera}/fetch`,
  async ({ id }, { extra: api }) => {
    const response = await api.get<Camera>(`${APIRoute.Cameras}/${id}`);
    return response.data;
  }
);

export const fetchSimilarCameras = createAsyncThunk<Camera[], { id: string }, ThunkApiConfig>(
  `${SliceName.Camera}/similar/fetch`,
  async ({ id }, { extra: api }) => {
    const response = await api.get<Camera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);
    return response.data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], { id: string }, ThunkApiConfig>(
  `${SliceName.Camera}/reviews/fetch`,
  async ({ id }, { extra: api }) => {
    const response = await api.get<Review[]>(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`);
    return response.data;
  }
);
