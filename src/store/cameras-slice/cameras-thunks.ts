import { Camera } from '../../types';
import { ThunkApiConfig } from '../types';
import { APIRoute, SliceName } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCameras = createAsyncThunk<Camera[], undefined, ThunkApiConfig>(
  `${SliceName.Cameras}/fetch`,
  async (_arg, { extra: api }) => {
    const response = await api.get<Camera[]>(APIRoute.Cameras);

    return response.data;
  }
);
