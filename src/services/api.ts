import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro/';
const REQUEST_TIMEOUT = 5000;
const ErrorMessage: Record<number, string> = {
  0: 'Ошибка сети',
  [StatusCodes.BAD_REQUEST]: 'Неверный запрос',
  [StatusCodes.UNAUTHORIZED]: 'Ошибка авторизации',
  [StatusCodes.FORBIDDEN]: 'Доступ запрещен',
  [StatusCodes.NOT_FOUND]: 'Ресурс не найден',
  [StatusCodes.CONFLICT]: 'Конфликтного обращения к ресурсу',
  [StatusCodes.INTERNAL_SERVER_ERROR]: 'Ошибка сервера',
} as const;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ response: AxiosResponse; message: string }>) => {
      if (error.message && error.response) {
        if (error.response.status in ErrorMessage) {
          toast.error(ErrorMessage[error.response.status]);
        } else {
          toast.error(error.message);
        }
        throw error;
      }
    }
  );

  return api;
};
