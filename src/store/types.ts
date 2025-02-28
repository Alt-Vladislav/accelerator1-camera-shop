import { Camera, Promotion, Review } from '../types';
import { LoadingStatus } from './consts';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '../hooks/use-app-dispatch';
import { State } from '../hooks/use-app-selector';


type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

type LoadingStatus = typeof LoadingStatus[keyof typeof LoadingStatus];

type LoadedData<T> = {
  data: T;
  status: LoadingStatus;
}

type AppState = {
  promotions: LoadedData<Promotion[]>;
  cameras: LoadedData<Camera[]>;
  camera: LoadedData<Camera | null>;
  similarCameras: LoadedData<Camera[]>;
  reviews: LoadedData<Review[]>;
}

export type { ThunkApiConfig, LoadingStatus, LoadedData, AppState };
