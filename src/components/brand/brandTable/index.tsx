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
import { useNavigate } from 'react-router-dom';

import { BRAND_TABLE } from '@/constants';
import { PropBrandTable, Brand } from '@/type/brand';

import DeleteModalWindow from '../brandDeleteModalWindow';
import EditModalWindow from '../brandEditModalWindow';

import { ActionCell, IconDelete, IconEdit, Th } from './style';

const BrandTable: React.FC<PropBrandTable> = ({
	setOpenNotification,
	setNotification,
	setRowsPerPage,
	serverRequest,
	rowsPerPage,
	setPage,
	brands,
	page,
}) => {
	const [data, setData] = useState({ name: '', phone: '', id: '', logo: '' });
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const columns = BRAND_TABLE.map((column) => ({
		id: column.id,
		label: column.label,
		minWidth: column.minWidth,
	}));
	const navigate = useNavigate();

	const chengeData = (
		name: string,
		phone: string,
		id: string,
		logo: string
	) => {
		setData((prev) => ({
			...prev,
			name: name,
			phone: phone,
			id: id,
			logo: logo,
		}));
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const changeFormatdate = (string: string) => {
		const date = new Date(string);
		const dateString = date.toLocaleDateString();
		return dateString;
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
						{brands
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((brand: Brand) => {
								return (
									<TableRow hover key={brand.id} role="checkbox" tabIndex={-1}>
										<Th
											onClick={() =>
												navigate(`/adminPanel/${brand.id}/${brand.name}/models`)
											}
										>
											{brand.name}
										</Th>
										<Th
											onClick={() =>
												navigate(`/adminPanel/${brand.id}/${brand.name}/models`)
											}
										>
											{brand.phone}
										</Th>
										<Th
											onClick={() =>
												navigate(`/adminPanel/${brand.id}/${brand.name}/models`)
											}
										>
											{changeFormatdate(brand.createdAt)}
										</Th>
										<ActionCell>
											<Tooltip title="Edit">
												<IconEdit
													onClick={() => {
														setOpenEditModal(true);
														chengeData(
															brand.name,
															brand.phone,
															brand.id,
															brand.logo
														);
													}}
												/>
											</Tooltip>
											<Tooltip title="Delete">
												<IconDelete
													onClick={() => {
														setOpenDeleteModal(true);
														chengeData(
															brand.name,
															brand.phone,
															brand.id,
															brand.logo
														);
													}}
												/>
											</Tooltip>
										</ActionCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				component="div"
				count={brands.length}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[10, 25, 100]}
			/>
			<EditModalWindow
				data={data}
				openEditModal={openEditModal}
				serverRequest={serverRequest}
				setData={setData}
				setNotification={setNotification}
				setOpenEditModal={setOpenEditModal}
				setOpenNotification={setOpenNotification}
			/>
			<DeleteModalWindow
				id={data.id}
				openDeleteModal={openDeleteModal}
				serverRequest={serverRequest}
				setNotification={setNotification}
				setOpenDeleteModal={setOpenDeleteModal}
				setOpenNotification={setOpenNotification}
			/>
		</Paper>
	);
};

export default BrandTable;
