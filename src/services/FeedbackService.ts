import { Feedbacks, FeedbackData } from '@/type';

import { api } from './Api';

class FeedbackService {
	async getAllFeedback(requestData: FeedbackData): Promise<Feedbacks> {
		const response = await api.get(
			`/feedback/paginate?page=${String(
				requestData.page + 1
			)}&pageSize=${String(requestData.rowsPerPage)}&searchTerm=${
				requestData.searchTerm
			}`
		);
		return response.data;
	}

	async changeStatusFeedback(id: string, isCall: boolean): Promise<void> {
		const response = await api.patch(`/feedback/${id}?isCall=${isCall}`);
		return response.data;
	}

	async deleteFeedback(id: string): Promise<void> {
		const response = await api.delete(`/feedback/${id}`);
		return response.data;
	}
}

export const feedbackService = new FeedbackService();
