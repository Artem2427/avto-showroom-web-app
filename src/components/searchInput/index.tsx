import React, { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

import { IPagination } from '@/type';

import { StyledPaper, StyledInputBase } from './style';

type Props = {
	paginationRequest: IPagination;
	setPaginationRequest: Dispatch<SetStateAction<IPagination>>;
};

const SearchInput: FC<Props> = ({
	paginationRequest,
	setPaginationRequest,
}) => {
	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setPaginationRequest((prev) => ({
			...prev,
			searchTerm: event.target.value,
		}));
	};

	const handleClearAll = () => {
		setPaginationRequest((prev) => ({
			...prev,
			searchTerm: '',
		}));
	};

	return (
		<StyledPaper>
			<SearchIcon />
			<StyledInputBase
				endAdornment={
					<IconButton onClick={handleClearAll}>
						<ClearIcon />
					</IconButton>
				}
				onChange={handleSearch}
				placeholder="Search"
				value={paginationRequest.searchTerm}
			/>
		</StyledPaper>
	);
};

export default SearchInput;
