import { Users, UserData } from '@/type';

import { api } from './Api';

class UserService {
	async getAllUsers(requestData: UserData): Promise<Users> {
		const response = await api.get(
			`/user/admin?page=${String(requestData.page + 1)}&pageSize=${String(
				requestData.rowsPerPage
			)}&searchTerm=${requestData.searchTerm}`
		);
		return response.data;
	}
}

export const userService = new UserService();
