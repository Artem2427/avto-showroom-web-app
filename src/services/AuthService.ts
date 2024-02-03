import { AppDispatch } from '@/store';
import { addUser } from '@/store/userSlice';
import { INewUser, ILogin } from '@/type';

import { storageService } from '../services/StorageService';

import { api } from './Api';

class AuthService {
	async registration(newUser: INewUser): Promise<any> {
		const response = await api.post('/auth/register', newUser);
		return response.data;
	}
	async login(userData: ILogin): Promise<any> {
		const response = await api.post('/auth/login', userData);
		return response.data;
	}
	logout(dispatch: AppDispatch) {
		dispatch(addUser(null));
		storageService.remove('access_token');
	}
	isLogin = (): boolean => (storageService.get('access_token') ? true : false);
}

export const authService = new AuthService();
