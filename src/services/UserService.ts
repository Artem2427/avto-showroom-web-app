import { DataUserType, IPassword, UserType } from '@/type';

import { api } from './Api';

class UserService {
	async getMe(): Promise<UserType> {
		const response = await api.get('/user');
		return response.data;
	}
	async updateData(userData: DataUserType): Promise<void> {
		const response = await api.patch('/user/profile', userData);
		return response.data;
	}
	async updateAvatar(avatar: FormData): Promise<void> {
		const response = await api.patch('/user/update-avatar', avatar, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
		return response.data;
	}
	async changePassword(password: IPassword): Promise<void> {
		const response = await api.patch('/user/change-password', password);
		return response.data;
	}
}

export const userService = new UserService();
