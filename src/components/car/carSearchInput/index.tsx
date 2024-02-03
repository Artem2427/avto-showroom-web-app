import React, { ChangeEvent } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

import { PropCarSearch } from '@/type/car';

import { StyleSearch, Container } from './style';

const SearchInput: React.FC<PropCarSearch> = ({ setSearchTerm, value }) => {
	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};
	return (
		<Container>
			<StyleSearch>
				<SearchIcon />
				<InputBase
					onChange={handleSearch}
					placeholder="Search"
					sx={{ ml: 1, flex: 1 }}
					value={value}
				/>
			</StyleSearch>
		</Container>
	);
};

export default SearchInput;
