import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import { Search } from '@mui/icons-material';
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
	Tooltip,
	Paper,
	Table,
} from '@mui/material';

import { FEEDBACK_TABLE } from '@/constants';
import Palette from '@/palette';
import { feedbackService } from '@/services/FeedbackService';
import { Feedback, Feedbacks } from '@/type';

import {
	IconChangesStatus,
	SearchComponent,
	IconDelete,
	ActionCell,
	CommentTh,
	Comment,
	Th,
} from './style';

const Users = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedbackData, setFeedbackData] = useState({
		feedbacks: [
			{
				comment: '',
				createdAt: '',
				id: '',
				isCall: false,
				name: '',
				phone: '',
				updatedAt: '',
			},
		],
	});
	const [requestData, setRequestData] = useState({
		searchTerm: '',
		page: 0,
		rowsPerPage: 10,
	});
	const columns = FEEDBACK_TABLE.map((column) => ({
		id: column.id,
		label: column.label,
		minWidth: column.minWidth,
	}));

	const serverRequest = useCallback(() => {
		feedbackService
			.getAllFeedback(requestData)
			.then(function (value: Feedbacks) {
				setFeedbackData(value);
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

	const changeStatus = async (id: string, isCall: boolean) => {
		await feedbackService.changeStatusFeedback(id, !isCall);
		serverRequest();
	};

	const deleteFeedback = async (id: string) => {
		await feedbackService.deleteFeedback(id);
		serverRequest();
	};

	return (
		<>
			<SearchComponent>
				<Search />
				<InputBase
					onChange={handleSearch}
					placeholder="Search"
					sx={{ ml: 1, flex: 1 }}
					value={requestData.searchTerm}
				/>
			</SearchComponent>
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
								{feedbackData.feedbacks
									.slice(
										requestData.page * requestData.rowsPerPage,
										requestData.page * requestData.rowsPerPage +
											requestData.rowsPerPage
									)
									.map((feedback: Feedback) => {
										return (
											<TableRow
												hover
												key={feedback.id}
												role="checkbox"
												tabIndex={-1}
											>
												<Th>{feedback.name}</Th>
												<Th>{feedback.phone}</Th>
												<CommentTh>
													<Comment>
														{feedback.comment ? feedback.comment : 'no comment'}
													</Comment>
												</CommentTh>
												<Th>{changeFormatdate(feedback.createdAt)}</Th>
												<Th>{feedback.isCall ? 'completed' : 'pending'}</Th>
												<ActionCell>
													<Tooltip title="Changes status">
														<IconChangesStatus
															onClick={() =>
																changeStatus(feedback.id, feedback.isCall)
															}
														/>
													</Tooltip>
													{feedback.isCall && (
														<Tooltip title="Delete">
															<IconDelete
																onClick={() => deleteFeedback(feedback.id)}
															/>
														</Tooltip>
													)}
												</ActionCell>
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						component="div"
						count={feedbackData.feedbacks.length}
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

export default Users;
