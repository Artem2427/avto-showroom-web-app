import { DEFAULT_FILTERS } from '@/constants/filters';
import { DefaultFilterType } from '@/type';

export const defaultCatalog = (catalog: DefaultFilterType) => {
	return Object.values(catalog).length ? catalog : DEFAULT_FILTERS;
};
