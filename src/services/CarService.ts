import {
	INewTransmissionType,
	RequestSuccessful,
	TransmissionType,
	INewDriveType,
	INewBodyType,
	BodyType,
	DriveType,
	FuelType,
} from '@/type';
import { Brand, Brands } from '@/type/brand';
import { Car, IEditCar, INewCar, CarImage, CarImages } from '@/type/car';
import { INewColor, Colors, Color } from '@/type/color';
import { Engine, INewEngine } from '@/type/engine';
import { ICreateModel, ModelRequest, Model } from '@/type/model';

import { api } from './Api';

class CarService {
	//CAR

	async addNewCar(newCar: INewCar): Promise<RequestSuccessful> {
		const response = await api.post('/cars/create', newCar);
		return response.data;
	}

	async addNewImage(carId: string, file: FormData): Promise<void> {
		const response = await api.post(`/cars/${carId}/image`, file, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
		return response.data;
	}

	async chengeMainImage(id: string, image: CarImage): Promise<void> {
		const response = await api.patch(`/cars/change-main-image/${id}`, image);
		return response.data;
	}

	async getAllCarImage(id: string): Promise<CarImages> {
		const response = await api.get(`/cars/images/${id}`);
		return response.data;
	}

	async getAllCars(
		page: number,
		pageSize: number,
		searchTerm: string,
		sortingTerm: string,
		direction: string
	): Promise<Array<Car>> {
		const response = await api.get(
			`/cars/admin?page=${String(page + 1)}&pageSize=${String(
				pageSize
			)}&searchTerm=${searchTerm}&dir=${direction}&ordering=${sortingTerm}`
		);
		return response.data;
	}

	async editCar(id: string, car: IEditCar): Promise<RequestSuccessful> {
		const response = await api.patch(`/cars/${id}`, car);
		return response.data;
	}

	async deleteCar(id: string | undefined): Promise<RequestSuccessful> {
		const response = await api.delete(`/cars/${id}`);
		return response.data;
	}

	async deleteCarImage(id: string, url: string): Promise<void> {
		const response = await api.delete(`/cars/image/${id}?imageUrl=${url}`);
		return response.data;
	}

	//COLOR

	async addColor(newColor: INewColor): Promise<void> {
		const response = await api.post('/color', newColor);
		return response.data;
	}

	async getAllColors(): Promise<Array<Color>> {
		const response = await api.get('/color/all');
		return response.data;
	}

	async getAllColorsTable(page: number, pageSize: number): Promise<Colors> {
		const response = await api.get(
			`/color/admin?page=${String(page + 1)}&pageSize=${String(pageSize)}`
		);
		return response.data;
	}

	async editСolor(id: string, editedColor: INewColor): Promise<void> {
		const response = await api.patch(`/color/${id}`, editedColor);
		return response.data;
	}

	async deleteСolor(id: string | undefined): Promise<void> {
		const response = await api.delete(`/color/${id}`);
		return response.data;
	}

	//BRAND

	async addBrand(formData: FormData): Promise<void> {
		const response = await api.post('/brand', formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
		return response.data;
	}

	async getAllBrands(): Promise<Array<Brand>> {
		const response = await api.get('/brand/all');
		return response.data;
	}

	async getAllBrandsTable(page: number, pageSize: number): Promise<Brands> {
		const response = await api.get(
			`/brand/admin?page=${String(page + 1)}&pageSize=${String(pageSize)}`
		);
		return response.data;
	}

	async editBrand(id: string, brand: FormData): Promise<void> {
		const response = await api.patch(`/brand/${id}`, brand, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
		return response.data;
	}

	async deleteBrand(id: string | undefined): Promise<void> {
		const response = await api.delete(`/brand/${id}`);
		return response.data;
	}

	//MODEL

	async addModel(
		id: string | undefined,
		model: ICreateModel
	): Promise<ModelRequest> {
		const response = await api.post(`/model/create/${id}`, model);
		return response.data;
	}

	async getAllModels(id: string | undefined): Promise<Array<Model>> {
		const response = await api.get(`/model/all/${id}`);
		return response.data;
	}

	async editModel(
		id: string | undefined,
		editedModel: ICreateModel
	): Promise<ModelRequest> {
		const response = await api.patch(`/model/${id}`, editedModel);
		return response.data;
	}

	async deleteModel(id: string | undefined): Promise<void> {
		const response = await api.delete(`/model/${id}`);
		return response.data;
	}

	//ENGINE

	async addEngine(newEngine: INewEngine): Promise<void> {
		const response = await api.post('/engine', newEngine);
		return response.data;
	}

	async getAllEngines(id: string | undefined): Promise<Array<Engine>> {
		const response = await api.get(`/engine/all/${id}`);
		return response.data;
	}

	async editEngine(
		id: string | undefined,
		editedModel: INewEngine
	): Promise<void> {
		const response = await api.patch(`/engine/${id}`, editedModel);
		return response.data;
	}

	async deleteEngine(engineId: string | undefined): Promise<void> {
		const response = await api.delete(`/engine/${engineId}`);
		return response.data;
	}

	// OTHER

	async addBodyType(newBodyType: INewBodyType): Promise<void> {
		const response = await api.post('/body-type', newBodyType);
		return response.data;
	}

	async getAllBodyTypes(): Promise<Array<BodyType>> {
		const response = await api.get('/body-type/all');
		return response.data;
	}

	async addDriveType(newDriveType: INewDriveType): Promise<void> {
		const response = await api.post('/drive', newDriveType);
		return response.data;
	}

	async getAllDriveTypes(): Promise<Array<DriveType>> {
		const response = await api.get('/drive/all');
		return response.data;
	}

	async addTransmissionType(
		newTransmissionType: INewTransmissionType
	): Promise<void> {
		const response = await api.post('/transmission', newTransmissionType);
		return response.data;
	}

	async getAllTransmissions(): Promise<Array<TransmissionType>> {
		const response = await api.get('/transmission/all');
		return response.data;
	}

	async getAllFuels(): Promise<Array<FuelType>> {
		const response = await api.get('/fuel/all');
		return response.data;
	}
}

export const carService = new CarService();
