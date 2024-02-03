import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import Pages from '@/constants/pages';
import store from '@/store';

import { authService } from './AuthService';
import { storageService } from './StorageService';

const { dispatch } = store;

const API_URL =
	process.env.REACT_APP_API_URL ?? 'https://avto-showroom.herokuapp.com/api';

export const api: AxiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

api.interceptors.request.use(async (config): Promise<AxiosRequestConfig> => {
	if (config.headers) {
		config.headers.Authorization = `Bearer ${storageService.get(
			'access_token'
		)}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error?.response?.status === 401) {
			window.location.href = Pages.AUTORIZATION;
			authService.logout(dispatch);
		}

		return Promise.reject(error);
	}
);
