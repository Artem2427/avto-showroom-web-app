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

import { COLOR_TABLE } from '@/constants';
import { PropColorTable, Color } from '@/type/color';

import DeleteModalWindow from '../colorDeleteModalWindow';
import EditModalWindow from '../colorEditModalWindow';

import { ActionCell, IconDelete, IconEdit, Th } from './style';

const ColorTable: React.FC<PropColorTable> = ({
	setOpenNotification,
	setNotification,
	setRowsPerPage,
	serverRequest,
	rowsPerPage,
	setPage,
	colors,
	page,
}) => {
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [data, setData] = useState({ color: '', id: '', hex: '' });
	const columns = COLOR_TABLE.map((column) => ({
		id: column.id,
		label: column.label,
		minWidth: column.minWidth,
	}));

	const chengeData = (color: string, id: string, hex: string) => {
		setData((prev) => ({ ...prev, color: color, id: id, hex: hex }));
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
									sx={{
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
						{colors
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((color: Color) => {
								return (
									<TableRow
										hover
										key={color.color}
										role="checkbox"
										tabIndex={-1}
									>
										<Th>
											<div
												style={{
													width: '20px',
													height: '20px',
													border: '1px solid black',
													backgroundColor: color.hex,
												}}
											></div>
										</Th>
										<Th>{color.color}</Th>
										<Th>{changeFormatdate(color.createdAt)}</Th>
										<ActionCell>
											<Tooltip title="Edit">
												<IconEdit
													onClick={() => {
														setOpenEditModal(true);
														chengeData(color.color, color.id, color.hex);
													}}
												/>
											</Tooltip>
											<Tooltip title="Delete">
												<IconDelete
													onClick={() => {
														setOpenDeleteModal(true);
														chengeData(color.color, color.id, color.hex);
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
				count={colors.length}
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

export default ColorTable;
