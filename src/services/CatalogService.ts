import {
	IPagination,
	IFilter,
	IFeedback,
	CurrencyEnum,
	CarType,
	FiltersType,
	CurrencyType,
	paginationData,
} from '@/type';

import { api } from './Api';

class CatalogService {
	async getCar(carId: string): Promise<CarType> {
		const response = await api.get(`/cars/one/${carId}`);
		return response.data;
	}
	async feedback(feedbackData: IFeedback): Promise<void> {
		await api.post('/feedback/', feedbackData);
	}
	async getFilters(): Promise<FiltersType> {
		const response = await api.get('/filter');
		return response.data;
	}
	async paginate(
		pagination: IPagination,
		filters: IFilter[]
	): Promise<paginationData> {
		const response = await api.post(
			`/cars/paginate?page=${pagination.page}&pageSize=${pagination.pageSize}&searchTerm=${pagination.searchTerm}&dir=${pagination.dir}&ordering=${pagination.ordering}`,
			{
				filters: filters,
			}
		);
		return response.data;
	}
	async changeCurrency(currency: CurrencyEnum): Promise<void> {
		await api.patch('/price', { currency: currency });
	}
	async getCurrentCurrency(): Promise<CurrencyType> {
		const response = await api.get('/price/current');
		return response.data;
	}
}

export const catalogService = new CatalogService();
