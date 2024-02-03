import React, { FC, Dispatch, SetStateAction } from 'react';

import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material';

import { IPagination } from '@/type';

import { StyledSelect } from './style';

type Props = {
	isEmptyCatalog: boolean;
	paginationRequest: IPagination;
	setPaginationRequest: Dispatch<SetStateAction<IPagination>>;
	options: (number | string)[];
};

const Selector: FC<Props> = ({
	isEmptyCatalog,
	paginationRequest,
	setPaginationRequest,
	options,
}) => {
	const handlePageSizeChange = (event: SelectChangeEvent<unknown>) => {
		setPaginationRequest((prev) => ({
			...prev,
			pageSize: Number(event.target.value),
		}));
	};

	return (
		<FormControl disabled={!isEmptyCatalog} fullWidth>
			<StyledSelect
				onChange={handlePageSizeChange}
				value={String(paginationRequest.pageSize)}
			>
				{options.map((el, index) => (
					<MenuItem key={index} value={el}>
						{`${el} per page`}
					</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};

export default Selector;
