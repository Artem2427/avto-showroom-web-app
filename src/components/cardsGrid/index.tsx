import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import { Grid, Pagination } from '@mui/material';

import CardCar from '../../components/carCard';
import { CarType, IPagination } from '../../type';

import {
	StyledStack,
	StyledCircularProgress,
	StyledEmptyBox,
	StyledInboxIcon,
	StyledTypography,
} from './style';

type Props = {
	loading: boolean;
	carsList: CarType[];
	totalAmount: number;
	paginationRequest: IPagination;
	setPaginationRequest: Dispatch<SetStateAction<IPagination>>;
};

const CardsGrid: FC<Props> = ({
	loading,
	carsList,
	totalAmount,
	paginationRequest,
	setPaginationRequest,
}) => {
	const handleChange = (event: ChangeEvent<unknown>, value: number) => {
		setPaginationRequest((prev) => prev && { ...prev, page: value });
		window.scrollTo(0, 0);
	};

	if (!carsList.length) {
		return (
			<StyledEmptyBox>
				<StyledInboxIcon />
				<StyledTypography>No data</StyledTypography>
			</StyledEmptyBox>
		);
	}

	return (
		<>
			{loading ? (
				<StyledCircularProgress />
			) : (
				<Grid
					columns={{ xs: 2, sm: 8, md: 12 }}
					container
					spacing={{ xs: 4, md: 2 }}
					sx={{ pt: 1 }}
				>
					{carsList?.map((car, index) => (
						<Grid item key={index} md={4} sm={4} xs={2}>
							<CardCar car={car} />
						</Grid>
					))}
				</Grid>
			)}
			<StyledStack>
				{totalAmount > 1 && (
					<Pagination
						count={totalAmount}
						onChange={handleChange}
						page={paginationRequest.page}
					/>
				)}
			</StyledStack>
		</>
	);
};

export default CardsGrid;
