import React, {
	FC,
	useState,
	KeyboardEvent,
	MouseEvent,
	useEffect,
	useMemo,
	useCallback,
} from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import { Stack } from '@mui/material';

import OrderSelector from '@/components/orderSelector';
import PageSizeSelector from '@/components/pageSizeSelector';
import Tags from '@/components/tags';
import { DEFAULT_PAGINATION_REQUEST } from '@/constants';
import { PAGE_SIZES } from '@/constants/filters';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { catalogService } from '@/services/CatalogService';
import { storageService } from '@/services/StorageService';
import { updateFromStorage } from '@/store/catalogSlice';
import { setFilters, setCurrency } from '@/store/filterSlise';

import CardsGrid from '../../components/cardsGrid';
import SearchInput from '../../components/searchInput/';
import SideFilters from '../../components/sideFilters';
import { CarType, DefaultFilterType, Dir } from '../../type';

import {
	StyledNavContainer,
	StyledNavigationBar,
	StyledSubNav,
	StyledButton,
	StyledDrawer,
	StyledBox,
	StyledIconButton,
	StyledArrowUpward,
	StyledArrowDownward,
	StyledSearchInputBox,
	StyledContainer,
	StyledSettingsIconButton,
} from './style';

const Catalog: FC = () => {
	const dispatch = useAppDispatch();
	const catalog = useAppSelector((state) => state.catalog.carFilters);
	const currentCurrency = useAppSelector((state) => state.filter.currency);

	const [drawer, setDrawer] = useState(false);
	const [carsList, setCarList] = useState<CarType[]>([]);
	const [loading, setLoading] = useState(false);
	const [cardsPerPage, setCardsPerPage] = useState(1);
	const [paginationRequest, setPaginationRequest] = useState(
		DEFAULT_PAGINATION_REQUEST
	);

	useEffect(() => {
		setLoading(true);
		catalogService.getFilters().then((response) => {
			dispatch(setFilters(response));
		});

		const data: DefaultFilterType | null = storageService.get('catalog');
		dispatch(updateFromStorage({ field: 'catalog', data: data }));
	}, [dispatch, currentCurrency]);

	const filterPayload = useMemo(() => Object.values(catalog), [catalog]);

	const fetchCars = useCallback(async () => {
		await catalogService
			.paginate(paginationRequest, filterPayload)
			.then((response) => {
				setLoading(false);
				setCarList(response.cars && response.cars);
				setCardsPerPage(
					Math.ceil(response.totalAmount / paginationRequest.pageSize)
				);
			});
	}, [filterPayload, paginationRequest]);

	const toggleDrawer =
		(open: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawer(open);
			if (!open) {
				window.scrollTo(0, 0);
			}
		};

	const handleDir = (value: Dir) => {
		setPaginationRequest((prev) => ({
			...prev,
			dir: value,
		}));
	};

	useEffect(() => {
		setLoading(true);
		if (Object.values(catalog).length) fetchCars();
	}, [paginationRequest, fetchCars, catalog, currentCurrency]);

	useEffect(() => {
		catalogService.getCurrentCurrency().then((response) => {
			dispatch(setCurrency(response.currentCurrency));
		});
	}, [dispatch]);

	const isEmptyCatalog = useMemo(
		(): boolean => (carsList.length ? true : false),
		[carsList]
	);

	return (
		<Stack direction="row">
			<StyledNavigationBar>
				<StyledNavContainer>
					<StyledBox md={'none'} xs={'flex'}>
						<SearchInput
							paginationRequest={paginationRequest}
							setPaginationRequest={setPaginationRequest}
						/>
					</StyledBox>
					<StyledSubNav>
						<StyledBox md={'none'} xs={'flex'}>
							<StyledSettingsIconButton onClick={toggleDrawer(true)}>
								<SettingsIcon color="inherit" />
							</StyledSettingsIconButton>
						</StyledBox>
						<StyledSearchInputBox>
							<SearchInput
								paginationRequest={paginationRequest}
								setPaginationRequest={setPaginationRequest}
							/>
						</StyledSearchInputBox>
						<Stack direction="row">
							<PageSizeSelector
								isEmptyCatalog={isEmptyCatalog}
								options={PAGE_SIZES}
								paginationRequest={paginationRequest}
								setPaginationRequest={setPaginationRequest}
							/>
							<OrderSelector
								isEmptyCatalog={isEmptyCatalog}
								paginationRequest={paginationRequest}
								setPaginationRequest={setPaginationRequest}
							/>
							{paginationRequest.dir === Dir.descend ? (
								<StyledIconButton onClick={() => handleDir(Dir.ascend)}>
									<StyledArrowUpward />
								</StyledIconButton>
							) : (
								<StyledIconButton onClick={() => handleDir(Dir.descend)}>
									<StyledArrowDownward />
								</StyledIconButton>
							)}
						</Stack>
					</StyledSubNav>
				</StyledNavContainer>
			</StyledNavigationBar>
			<StyledBox md={'flex'} xs={'none'}>
				<SideFilters />
			</StyledBox>
			<StyledDrawer onClose={toggleDrawer(false)} open={drawer}>
				<SideFilters />
				<StyledButton onClick={toggleDrawer(false)}>show results</StyledButton>
			</StyledDrawer>
			<StyledContainer>
				<Tags />
				<CardsGrid
					carsList={carsList}
					loading={loading}
					paginationRequest={paginationRequest}
					setPaginationRequest={setPaginationRequest}
					totalAmount={cardsPerPage}
				/>
			</StyledContainer>
		</Stack>
	);
};

export default Catalog;
