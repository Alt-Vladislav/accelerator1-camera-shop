import { Promotion } from '../../types';
import { ThunkApiConfig } from '../types';
import { APIRoute, SliceName } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPromotions = createAsyncThunk<Promotion[], undefined, ThunkApiConfig>(
  `${SliceName.Promotions}/fetch`,
  async (_arg, { extra: api }) => {
    const response = await api.get<Promotion[]>(APIRoute.Promo);

    return response.data;
  }
);
