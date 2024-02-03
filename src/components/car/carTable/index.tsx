import React, { useState } from 'react';

import {
	TablePagination,
	TableContainer,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Tooltip,
	Paper,
	Table,
} from '@mui/material';

import { CAR_TABLE } from '@/constants';
import { PropCarTable } from '@/type/car';

import DeleteModalWindow from '../carDeleteModalWindow';
import EditModalWindow from '../carEditModalWindow';
import ImageModalWindow from '../carImageModalWindow';

import {
	FlexContainer,
	IconSorting,
	IconDelete,
	IconCamera,
	ActionCell,
	IconEdit,
	IconFlex,
	Td,
} from './style';

const CarTable: React.FC<PropCarTable> = ({
	setOpenNotification,
	setNotification,
	setRowsPerPage,
	setSortingTerm,
	serverRequest,
	setIsDescend,
	rowsPerPage,
	isDescend,
	setPage,
	cars,
	page,
}) => {
	const [openEditModal, setOpenEditModal] = useState(false);
	const [id, setId] = useState('');
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openImageModal, setOpenImageModal] = useState(false);
	const [data, setData] = useState({
		price: 0,
		currency: '',
		race: 0,
		createYear: '',
		name: '',
		availableCar: 0,
		seats: 0,
		id: '',
	});
	const columns = CAR_TABLE.map((column) => ({
		id: column.id,
		label: column.label,
		minWidth: column.minWidth,
	}));

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const chengeId = (id: string) => {
		setId(id);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const changeFormatdate = (string: string) => {
		const date = new Date(string);
		const dateString = `${date.getFullYear()}`;
		return dateString;
	};

	const chengeData = (
		price: number,
		currency: string,
		race: number,
		createYear: string,
		name: string,
		availableCar: number,
		seats: number,
		id: string
	) => {
		setData((prev) => ({
			...prev,
			price: price,
			currency: currency,
			race: race,
			createYear: createYear,
			name: name,
			availableCar: availableCar,
			seats: seats,
			id: id,
		}));
	};

	const ChangeSearchTerm = (id: string) => {
		setSortingTerm(id);
		setIsDescend(!isDescend);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 500 }}>
				<Table aria-label="sticky table" stickyHeader>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									style={{ textAlign: 'left', minWidth: column.minWidth }}
								>
									<FlexContainer>
										{column.label}
										<IconSorting onClick={() => ChangeSearchTerm(column.id)} />
									</FlexContainer>
								</TableCell>
							))}
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cars
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((car, index) => {
								return (
									<TableRow hover key={index} role="checkbox" tabIndex={-1}>
										<Td>{car.name}</Td>
										<Td>{changeFormatdate(car.createYear)}</Td>
										<Td>{car.model}</Td>
										<Td>{car.body}</Td>
										<Td>{car.color}</Td>
										<Td>{car.transmission}</Td>
										<Td>{car.availableCar}</Td>
										<ActionCell>
											<IconFlex>
												<Tooltip title="Add img">
													<IconCamera
														onClick={() => {
															setOpenImageModal(true);
															chengeId(car.id);
														}}
													/>
												</Tooltip>
												<Tooltip title="Edit">
													<IconEdit
														onClick={() => {
															setOpenEditModal(true);
															chengeData(
																Number(car.price),
																car.currency,
																Number(car.race),
																car.createYear,
																car.name,
																Number(car.availableCar),
																Number(car.seats),
																car.id
															);
														}}
													/>
												</Tooltip>
												<Tooltip title="Delete">
													<IconDelete
														onClick={() => {
															setOpenDeleteModal(true);
															chengeId(car.id);
														}}
													/>
												</Tooltip>
											</IconFlex>
										</ActionCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				component="div"
				count={cars.length}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[10, 25, 100]}
			/>
			{openImageModal && (
				<ImageModalWindow
					id={id}
					openImageModal={openImageModal}
					setNotification={setNotification}
					setOpenImageModal={setOpenImageModal}
					setOpenNotification={setOpenNotification}
				/>
			)}
			<DeleteModalWindow
				id={id}
				openDeleteModal={openDeleteModal}
				serverRequest={serverRequest}
				setNotification={setNotification}
				setOpenDeleteModal={setOpenDeleteModal}
				setOpenNotification={setOpenNotification}
			/>
			<EditModalWindow
				data={data}
				openEditModal={openEditModal}
				serverRequest={serverRequest}
				setNotification={setNotification}
				setOpenEditModal={setOpenEditModal}
				setOpenNotification={setOpenNotification}
			/>
		</Paper>
	);
};

export default CarTable;
