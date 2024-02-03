import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
	CircularProgress,
	TablePagination,
	TableContainer,
	InputBase,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Backdrop,
	Paper,
	Table,
} from '@mui/material';

import { USER_TABLE } from '@/constants';
import Palette from '@/palette';
import { userService } from '@/services/UserServiceAdmin';
import { User, Users } from '@/type';

import { Search, Th } from './style';

const UsersTable = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [userData, setUserData] = useState<Users>({
		users: [
			{
				avatar: '',
				createdAt: '',
				email: '',
				firstName: '',
				id: '',
				lastName: '',
				phone: '',
				role: '',
				updatedAt: '',
			},
		],
	});
	const [requestData, setRequestData] = useState({
		searchTerm: '',
		page: 0,
		rowsPerPage: 10,
	});
	const columns = USER_TABLE.map((column) => ({
		id: column.id,
		label: column.label,
		minWidth: column.minWidth,
	}));

	const serverRequest = useCallback(() => {
		userService.getAllUsers(requestData).then(function (value: Users) {
			setUserData(value);
			setIsLoading(false);
		});
	}, [requestData]);

	useEffect(() => {
		serverRequest();
	}, [serverRequest]);

	const handleChangePage = (event: unknown, newPage: number) => {
		setRequestData((prev) => ({
			...prev,
			page: newPage,
		}));
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRequestData((prev) => ({
			...prev,
			page: 0,
			rowsPerPage: +event.target.value,
		}));
	};

	const changeFormatdate = (string: string) => {
		const date = new Date(string);
		const dateString = date.toLocaleDateString();
		return dateString;
	};

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setRequestData((prev) => ({
			...prev,
			searchTerm: event.target.value,
		}));
	};

	return (
		<>
			<Search>
				<SearchIcon />
				<InputBase
					onChange={handleSearch}
					placeholder="Search"
					sx={{ ml: 1, flex: 1 }}
					value={requestData.searchTerm}
				/>
			</Search>
			{isLoading ? (
				<Backdrop
					open={true}
					sx={{
						color: Palette.orange,
						zIndex: (theme) => theme.zIndex.drawer + 1,
					}}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			) : (
				<Paper sx={{ width: '100%', overflow: 'hidden' }}>
					<TableContainer sx={{ maxHeight: 500 }}>
						<Table aria-label="sticky table" stickyHeader>
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											style={{
												textAlign: 'left',
												minWidth: column.minWidth,
											}}
										>
											{column.label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{userData.users
									.slice(
										requestData.page * requestData.rowsPerPage,
										requestData.page * requestData.rowsPerPage +
											requestData.rowsPerPage
									)
									.map((user: User) => {
										return (
											<TableRow
												hover
												key={user.id}
												role="checkbox"
												tabIndex={-1}
											>
												<Th>{user.firstName}</Th>
												<Th>{user.lastName}</Th>
												<Th>{user.email}</Th>
												<Th>{changeFormatdate(user.createdAt)}</Th>
												<Th>{user.phone ? user.phone : 'no phone'}</Th>
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						component="div"
						count={userData.users.length}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						page={requestData.page}
						rowsPerPage={requestData.rowsPerPage}
						rowsPerPageOptions={[10, 25, 100]}
					/>
				</Paper>
			)}
		</>
	);
};

export default UsersTable;
